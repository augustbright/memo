import { getEnv } from "./env";

export type FileType = "file" | "dir";
export type FileId = string;

export type Owner = string;
export type RepositoryName = string;
export type Branch = string;
export type Path = string;

export interface FileLocation {
  owner?: Owner,
  repository?: RepositoryName,
  branch?: Branch,
  path?: Path
}

interface GithubFile {
  name: string;
  url: string;
  type: FileType;
  content?: string;
  [id: string]: any;
}

type GithubResponse = GithubFile | GithubFile[];

export interface File {
  type: FileType;
  id: FileId;
  name: string;
  url: string;
  content?: string;
}

export async function loadFromGithub(location: FileLocation): Promise<File[]> {
  if (!isValidLocation(location)) {
    throw new Error("Invalid location");
  }

  const url = getLocationURL(location);
  const response = await fetch(url);
  const parsed: GithubResponse = await response.json();
  const githubFiles = parsed instanceof Array ? parsed : [parsed];

  return githubFiles
    .filter(githubFile => {
      if (githubFile.type === 'dir') {
        return true;
      }
      if (githubFile.name.match(/.*\.(yml|yaml)/)) {
        return true;
      }

      return false;
    })
    .map((githubFile): File => {
      const id = getFileId({
        ...location,
        path: [location.path, githubFile.name].join('/').replace(/\/+/g, '/')
      });

      if (!id) {
        throw new Error("Invalid location");
      }

      const value = {
        id,
        name: githubFile.name,
        type: githubFile.type,
        url: githubFile.url,
        content: githubFile.content
      };

      return value;
    });
}

export function getFileLocation(fileId: FileId): FileLocation {
  const [owner, repository, branch, ...path] = fileId.split('/');
  return {
    owner,
    repository,
    branch,
    path: path.join('/')
  };
}

export function getFileId(location: FileLocation): FileId | null {
  return [location.owner || '', location.repository || '', location.branch || '', location.path || ''].join('/').replace(/\/+/g, '/') || null;
}

export function getLocationURL(location: FileLocation): string {
  const { GITHUB_HOST } = getEnv();

  if (!GITHUB_HOST) {
    throw new Error('GITHUB_HOST is not specified');
  }

  return `${[
    'https:/',
    GITHUB_HOST,
    'repos',
    location.owner,
    location.repository,
    'contents',
    location.path,
  ].join('/')}?ref=${location.branch}`;
}

function isValidLocation(location: FileLocation): boolean {
  return Boolean(location.owner && location.repository && location.branch);
}
