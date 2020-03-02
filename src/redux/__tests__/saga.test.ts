import {
  rootSaga,
  watchBrowserLoadFiles,
  watchBrowserSetLocation,
  onBrowserLoadFiles
} from "../saga";
import { reducer } from "../configure";
import { loadFiles } from "../browser";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { selectFiles, selectFilesStatuses } from "../selectors";
import { FileStatus } from "../filesStatuses";
import { loadFromGithub } from "../../lib/files";

describe("root saga", () => {
  test("It forks watchers", async () => {
    await expectSaga(rootSaga)
      .fork(watchBrowserLoadFiles)
      .fork(watchBrowserSetLocation)
      .silentRun();
  });

  test("It handles file downloading", async () => {
    const mockFilesFromGithub = [
      {
        id: "fileId",
        name: "name",
        type: "file",
        url: "path/to/file",
        content: "content"
      }
    ];
    const result = await expectSaga(rootSaga)
      .withReducer(reducer)
      .dispatch(
        loadFiles({
          owner: "augustbright",
          repository: "memo",
          branch: "master",
          path: "material"
        })
      )
      .provide([[matchers.call.fn(loadFromGithub), mockFilesFromGithub]])
      .silentRun();

    expect(selectFiles(result.storeState)).toMatchObject({
        fileId: mockFilesFromGithub[0]
    });

    expect(
      selectFilesStatuses(result.storeState)[
        "augustbright/memo/master/material"
      ]
    ).toBe(FileStatus.READY);
  });
});