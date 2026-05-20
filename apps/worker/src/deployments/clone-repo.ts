import simpleGit from "simple-git";

export async function cloneRepo(
    repoUrl: string,
    projectName: string
) {

    const git = simpleGit();

    const targetPath =
        `./deployments/${projectName}`;

    await git.clone(
        repoUrl,
        targetPath
    );

    return targetPath;
}