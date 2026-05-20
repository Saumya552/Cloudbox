import Docker from "dockerode";

import tar from "tar-fs";

const docker = new Docker();

export async function buildContainer(
    projectPath: string,
    projectName: string,
    sendLog: (message: string) => void
) {

    return new Promise((resolve, reject) => {

        const tarStream = tar.pack(projectPath);

        docker.buildImage(

            tarStream,

            {
                t: `cloudbox-${projectName}`,
            },

            async (error, stream) => {

                if (error || !stream) {
                    return reject(error);
                }

                stream.on("data", (chunk) => {

                    const log = chunk.toString();

                    sendLog(log);
                });

                stream.on("end", () => {

                    sendLog(
                        "✅ Docker image build completed"
                    );

                    resolve(true);
                });

                stream.on("error", reject);
            }
        );
    });
}