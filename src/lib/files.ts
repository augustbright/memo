export type FileType = "file" | "dir";
export type FileId = string;

interface GithubFile {
    name: string;
    url: string;
    type: FileType;
    [id: string]: any;
}

export interface File {
  type: FileType;
  id: FileId;
  name: string;
  url: string;
}

const MOCK_FILES: GithubFile[] = [
  {
    name: "README.md",
    path: "README.md",
    sha: "b27e94b1ff6ab82b7ae564eeacc13f0cd9da12c7",
    size: 25,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/README.md?ref=master",
    html_url: "https://github.com/augustbright/snippets/blob/master/README.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/b27e94b1ff6ab82b7ae564eeacc13f0cd9da12c7",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/README.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/README.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/b27e94b1ff6ab82b7ae564eeacc13f0cd9da12c7",
      html: "https://github.com/augustbright/snippets/blob/master/README.md"
    }
  },
  {
    name: "advanced-styling-with-sass.md",
    path: "advanced-styling-with-sass.md",
    sha: "369eee32fdb0ddfa55821a460b67599bae08cc5f",
    size: 801,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/advanced-styling-with-sass.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/advanced-styling-with-sass.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/369eee32fdb0ddfa55821a460b67599bae08cc5f",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/advanced-styling-with-sass.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/advanced-styling-with-sass.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/369eee32fdb0ddfa55821a460b67599bae08cc5f",
      html:
        "https://github.com/augustbright/snippets/blob/master/advanced-styling-with-sass.md"
    }
  },
  {
    name: "creating-react-app.md",
    path: "creating-react-app.md",
    sha: "52d5a0482dd8811520dc55da0bbd0a7af1e79b86",
    size: 1448,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/creating-react-app.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/creating-react-app.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/52d5a0482dd8811520dc55da0bbd0a7af1e79b86",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/creating-react-app.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/creating-react-app.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/52d5a0482dd8811520dc55da0bbd0a7af1e79b86",
      html:
        "https://github.com/augustbright/snippets/blob/master/creating-react-app.md"
    }
  },
  {
    name: "docker.md",
    path: "docker.md",
    sha: "9e8b122e6298643066a8b785b2687ce6021fe1cc",
    size: 3089,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/docker.md?ref=master",
    html_url: "https://github.com/augustbright/snippets/blob/master/docker.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/9e8b122e6298643066a8b785b2687ce6021fe1cc",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/docker.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/docker.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/9e8b122e6298643066a8b785b2687ce6021fe1cc",
      html: "https://github.com/augustbright/snippets/blob/master/docker.md"
    }
  },
  {
    name: "fontawesome-nextjs.md",
    path: "fontawesome-nextjs.md",
    sha: "18fe13039571938fe097474fcafe70be14fb9dbb",
    size: 523,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/fontawesome-nextjs.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/fontawesome-nextjs.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/18fe13039571938fe097474fcafe70be14fb9dbb",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/fontawesome-nextjs.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/fontawesome-nextjs.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/18fe13039571938fe097474fcafe70be14fb9dbb",
      html:
        "https://github.com/augustbright/snippets/blob/master/fontawesome-nextjs.md"
    }
  },
  {
    name: "i18n-nextjs.md",
    path: "i18n-nextjs.md",
    sha: "05afe7f6770f7108ad4f1f3c13564fa6d1d01772",
    size: 2186,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/i18n-nextjs.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/i18n-nextjs.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/05afe7f6770f7108ad4f1f3c13564fa6d1d01772",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/i18n-nextjs.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/i18n-nextjs.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/05afe7f6770f7108ad4f1f3c13564fa6d1d01772",
      html:
        "https://github.com/augustbright/snippets/blob/master/i18n-nextjs.md"
    }
  },
  {
    name: "js-modules.md",
    path: "js-modules.md",
    sha: "0ee622bb5cca8d6b95ee6bc6179fbbeca0abf5cf",
    size: 1209,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/js-modules.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/js-modules.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/0ee622bb5cca8d6b95ee6bc6179fbbeca0abf5cf",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/js-modules.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/js-modules.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/0ee622bb5cca8d6b95ee6bc6179fbbeca0abf5cf",
      html: "https://github.com/augustbright/snippets/blob/master/js-modules.md"
    }
  },
  {
    name: "memo",
    path: "memo",
    sha: "a730ce46fbd368f1a0ab19f76a00c3e57d9c642c",
    size: 0,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/memo?ref=master",
    html_url: "https://github.com/augustbright/snippets/tree/master/memo",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/trees/a730ce46fbd368f1a0ab19f76a00c3e57d9c642c",
    download_url: null,
    type: "dir",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/memo?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/trees/a730ce46fbd368f1a0ab19f76a00c3e57d9c642c",
      html: "https://github.com/augustbright/snippets/tree/master/memo"
    }
  },
  {
    name: "modern-frontend.md",
    path: "modern-frontend.md",
    sha: "75a77d754cfe6729d7fcf82d813f9b6aac8581c5",
    size: 2203,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/modern-frontend.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/modern-frontend.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/75a77d754cfe6729d7fcf82d813f9b6aac8581c5",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/modern-frontend.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/modern-frontend.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/75a77d754cfe6729d7fcf82d813f9b6aac8581c5",
      html:
        "https://github.com/augustbright/snippets/blob/master/modern-frontend.md"
    }
  },
  {
    name: "npm-package-create-publish.md",
    path: "npm-package-create-publish.md",
    sha: "54f3052626a25d26ae248d130b9ced5060e38f56",
    size: 2565,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/npm-package-create-publish.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/npm-package-create-publish.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/54f3052626a25d26ae248d130b9ced5060e38f56",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/npm-package-create-publish.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/npm-package-create-publish.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/54f3052626a25d26ae248d130b9ced5060e38f56",
      html:
        "https://github.com/augustbright/snippets/blob/master/npm-package-create-publish.md"
    }
  },
  {
    name: "react-api.md",
    path: "react-api.md",
    sha: "fb67315831b5194aa8c9b8dad5d79a34dc5d8c25",
    size: 3712,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/react-api.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/react-api.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/fb67315831b5194aa8c9b8dad5d79a34dc5d8c25",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/react-api.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/react-api.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/fb67315831b5194aa8c9b8dad5d79a34dc5d8c25",
      html: "https://github.com/augustbright/snippets/blob/master/react-api.md"
    }
  },
  {
    name: "react-router.md",
    path: "react-router.md",
    sha: "de48ce52c63ad02045dcf7eb7db40320ae3a21bb",
    size: 1209,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/react-router.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/react-router.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/de48ce52c63ad02045dcf7eb7db40320ae3a21bb",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/react-router.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/react-router.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/de48ce52c63ad02045dcf7eb7db40320ae3a21bb",
      html:
        "https://github.com/augustbright/snippets/blob/master/react-router.md"
    }
  },
  {
    name: "test-markdown.md",
    path: "test-markdown.md",
    sha: "b4ed0488227b24045d5e395730ff2cc1928c9024",
    size: 7570,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/test-markdown.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/test-markdown.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/b4ed0488227b24045d5e395730ff2cc1928c9024",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/test-markdown.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/test-markdown.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/b4ed0488227b24045d5e395730ff2cc1928c9024",
      html:
        "https://github.com/augustbright/snippets/blob/master/test-markdown.md"
    }
  },
  {
    name: "typescript-setup.md",
    path: "typescript-setup.md",
    sha: "0a815a55b7de4686d0921533df83c7be1035ad50",
    size: 1690,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/typescript-setup.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/typescript-setup.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/0a815a55b7de4686d0921533df83c7be1035ad50",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/typescript-setup.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/typescript-setup.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/0a815a55b7de4686d0921533df83c7be1035ad50",
      html:
        "https://github.com/augustbright/snippets/blob/master/typescript-setup.md"
    }
  },
  {
    name: "webpack-styling.md",
    path: "webpack-styling.md",
    sha: "57f93a5ab27a79fea16cadf576547c08c5ea1b51",
    size: 599,
    url:
      "https://api.github.com/repos/augustbright/snippets/contents/webpack-styling.md?ref=master",
    html_url:
      "https://github.com/augustbright/snippets/blob/master/webpack-styling.md",
    git_url:
      "https://api.github.com/repos/augustbright/snippets/git/blobs/57f93a5ab27a79fea16cadf576547c08c5ea1b51",
    download_url:
      "https://raw.githubusercontent.com/augustbright/snippets/master/webpack-styling.md",
    type: "file",
    _links: {
      self:
        "https://api.github.com/repos/augustbright/snippets/contents/webpack-styling.md?ref=master",
      git:
        "https://api.github.com/repos/augustbright/snippets/git/blobs/57f93a5ab27a79fea16cadf576547c08c5ea1b51",
      html:
        "https://github.com/augustbright/snippets/blob/master/webpack-styling.md"
    }
  }
];

export async function loadFiles(owner: string, repo: string, branch: string = 'master', path: string = '/') {
  owner;
  repo;
  branch;
  path;  
  return MOCK_FILES;
}

export function normalizeGtihubFiles(idPrefix: string, githubFiles: GithubFile[]): File[] {
    return githubFiles.map((githubFile): File => ({
        id: [idPrefix, githubFile.name].join('/'),
        name: githubFile.name,
        type: githubFile.type,
        url: githubFile.url
    }));
}

export async function loadNormalizedFiles(owner: string, repo: string, branch: string = 'master', path: string = '/'): File[] {
    const githubFiles = await loadFiles(owner, repo, branch, path);
    const idPrefix = [owner, repo, branch, path].join('/');
    return normalizeGtihubFiles(idPrefix, githubFiles);
}
