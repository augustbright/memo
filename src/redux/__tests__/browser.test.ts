import {
  browser,
  loadFiles,
  setLocation,
  ActionLoadFiles,
  ActionSetLocation,
  DEFAULT_STATE,
  BrowserState
} from "../browser";
import { FileLocation } from "../../lib/files";

const materialLocation: FileLocation = {
  owner: "augustbright",
  repository: "memo",
  branch: "master",
  path: "material"
};

describe("browser", () => {
  // action creators
  test("loadFile() should return a valid action", () => {
    expect(loadFiles(materialLocation)).toEqual(<ActionLoadFiles>{
      type: "BROWSER/LOAD_FILES",
      payload: materialLocation
    });
  });

  test("setLocation() should return a valid action", () => {
    expect(setLocation(materialLocation)).toEqual(<ActionSetLocation>{
      type: "BROWSER/SET_LOCATION",
      payload: materialLocation
    });
  });

  // reducer
  test("reducer should return the same state by default", () => {
    const sameState = browser(DEFAULT_STATE, { type: "UNKNOWN_ACTION" });
    expect(sameState).toBe(DEFAULT_STATE);
  });

  test("reducer should return the same state for BROWSER/LOAD_FILES", () => {
    const sameState = browser(DEFAULT_STATE, loadFiles(materialLocation));
    expect(sameState).toBe(DEFAULT_STATE);
  });

  test("reducer should return valid location for BROWSER/SET_LOCATION", () => {
    const state = browser(DEFAULT_STATE, setLocation(materialLocation));
    expect(state).toEqual(<BrowserState>{
        owner: materialLocation.owner,
        repository: materialLocation.repository,
        branch: materialLocation.branch,
        path: materialLocation.path
    });
  });
});
