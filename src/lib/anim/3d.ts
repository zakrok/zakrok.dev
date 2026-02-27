
import {getMvp} from "$lib/anim/UglAlpha";
import {matrix, multiply} from "mathjs";
import type {ArttAnimation} from "$lib/anim/ArttAnimation";

export function d3(windowWidth: number, windowHeight: number): ArttAnimation {
    let siz = 50
    let trSize = 0.5
    let pixelSize = 10
    const lightProp = [0.8, 0.8, 0.8]
    const discretize = 50


    return {
        frames: [ctx => {
            let now = Date.now()
            const zBuffer = new Array(windowWidth * windowHeight).fill(Infinity);

            const mvp = getMvp(siz, siz)

            const lightPos = [1, 3, 4]

            const half = trSize / 2;
            const triangles = [
                {
                    vertices: [
                        [-half, -half, -half, 1],
                        [-half, half, -half, 1],
                        [half, half, -half, 1],
                    ],
                    color: [1, 1, 1]
                }, {
                    vertices: [
                        [-half, -half, -half, 1],
                        [half, half, -half, 1],
                        [half, -half, -half, 1],
                    ],
                    color: [1, 1, 1]
                },
                {
                    vertices: [
                        [-half, -half, half, 1],
                        [half, half, half, 1],
                        [-half, half, half, 1],
                    ],
                    color: [1, 1, 1]
                }, {
                    vertices: [
                        [-half, -half, half, 1],
                        [half, -half, half, 1],
                        [half, half, half, 1],
                    ],
                    color: [1, 1, 1]
                },
                {
                    vertices: [
                        [-half, -half, -half, 1],
                        [-half, -half, half, 1],
                        [-half, half, half, 1],
                    ],
                    color: [1, 1, 1]
                }, {
                    vertices: [
                        [-half, -half, -half, 1],
                        [-half, half, half, 1],
                        [-half, half, -half, 1],
                    ],
                    color: [1, 1, 1]
                },
                {
                    vertices: [
                        [half, -half, -half, 1],
                        [half, half, half, 1],
                        [half, -half, half, 1],
                    ],
                    color: [1, 1, 1]
                }, {
                    vertices: [
                        [half, -half, -half, 1],
                        [half, half, -half, 1],
                        [half, half, half, 1],
                    ],
                    color: [1, 1, 1]
                },
                {
                    vertices: [
                        [-half, -half, -half, 1],
                        [half, -half, -half, 1],
                        [half, -half, half, 1],
                    ],
                    color: [1, 1, 1]
                }, {
                    vertices: [
                        [-half, -half, -half, 1],
                        [half, -half, half, 1],
                        [-half, -half, half, 1],
                    ],
                    color: [1, 1, 1]
                },
                {
                    vertices: [
                        [-half, half, -half, 1],
                        [half, half, half, 1],
                        [half, half, -half, 1],
                    ],
                    color: [1, 1, 1]
                }, {
                    vertices: [
                        [-half, half, -half, 1],
                        [-half, half, half, 1],
                        [half, half, half, 1],
                    ],
                    color: [1, 1, 1]
                },
            ]

            const t = now * 0.0003;
            const mrot = matrix([
                [Math.cos(t), 0, Math.sin(t), 0],
                [0, 1, 0, 0],
                [-Math.sin(t), 0, Math.cos(t), 0],
                [0, 0, 0, 1]
            ])

            triangles.forEach(triangle => {
                const worldA = multiply(mrot, triangle.vertices[0]);
                const worldB = multiply(mrot, triangle.vertices[1]);
                const worldC = multiply(mrot, triangle.vertices[2]);

                const edge1 = [
                    worldB.get([0]) - worldA.get([0]),
                    worldB.get([1]) - worldA.get([1]),
                    worldB.get([2]) - worldA.get([2])
                ];
                const edge2 = [
                    worldC.get([0]) - worldA.get([0]),
                    worldC.get([1]) - worldA.get([1]),
                    worldC.get([2]) - worldA.get([2])
                ];
                const normal = [
                    edge1[1] * edge2[2] - edge1[2] * edge2[1],
                    edge1[2] * edge2[0] - edge1[0] * edge2[2],
                    edge1[0] * edge2[1] - edge1[1] * edge2[0]
                ];
                const normLength = Math.sqrt(normal[0] ** 2 + normal[1] ** 2 + normal[2] ** 2);
                const normalNorm = [normal[0] / normLength, normal[1] / normLength, normal[2] / normLength];

                const p = multiply(mvp, worldA)
                const q = multiply(mvp, worldB)
                const r = multiply(mvp, worldC)

                const ax = p.get([0]);
                const ay = p.get([1]);
                const bx = q.get([0]);
                const by = q.get([1]);
                const cx = r.get([0]);
                const cy = r.get([1]);

                const z1 = p.get([2]);
                const z2 = q.get([2]);
                const z3 = r.get([2]);

                const minX = Math.floor(Math.min(ax, bx, cx));
                const maxX = Math.ceil(Math.max(ax, bx, cx));
                const minY = Math.floor(Math.min(ay, by, cy));
                const maxY = Math.ceil(Math.max(ay, by, cy));

                for (let py = minY; py <= maxY; py++) {
                    for (let px = minX; px <= maxX; px++) {
                        const denom = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
                        const alpha = ((by - cy) * (px - cx) + (cx - bx) * (py - cy)) / denom;
                        const beta = ((cy - ay) * (px - cx) + (ax - cx) * (py - cy)) / denom;
                        const gamma = 1 - alpha - beta;

                        if (alpha < 0 || beta < 0 || gamma < 0) continue;

                        const z = alpha * z1 + beta * z2 + gamma * z3;
                        const scr_x = windowWidth / 2 + (px * pixelSize);
                        const scr_y = windowHeight / 2 + (py * pixelSize);
                        if (scr_x < 0 || scr_x >= windowWidth || scr_y < 0 || scr_y > windowHeight) continue;

                        const bufferIndex = Math.floor(scr_y / pixelSize) * Math.floor(windowWidth / pixelSize) + Math.floor(scr_x / pixelSize);

                        if (bufferIndex < 0 || bufferIndex >= zBuffer.length || z >= zBuffer[bufferIndex]) continue;

                        zBuffer[bufferIndex] = z;
                        const world3D = [
                            alpha * worldA.get([0]) + beta * worldB.get([0]) + gamma * worldC.get([0]),
                            alpha * worldA.get([1]) + beta * worldB.get([1]) + gamma * worldC.get([1]),
                            alpha * worldA.get([2]) + beta * worldB.get([2]) + gamma * worldC.get([2])
                        ];
                        const lightDir = [
                            lightPos[0] - world3D[0],
                            lightPos[1] - world3D[1],
                            lightPos[2] - world3D[2]
                        ];
                        const lightLength = Math.sqrt(lightDir[0] ** 2 + lightDir[1] ** 2 + lightDir[2] ** 2);
                        const cosine = Math.max(0,
                            (normalNorm[0] * lightDir[0] +
                                normalNorm[1] * lightDir[1] + normalNorm[2] * lightDir[2]) / lightLength);
                        const color = [
                            Math.floor(discretize * triangle.color[0] * lightProp[0] * cosine) / discretize,
                            Math.floor(discretize * triangle.color[1] * lightProp[1] * cosine) / discretize,
                            Math.floor(discretize * triangle.color[2] * lightProp[2] * cosine) / discretize,
                        ]
                        ctx.fillStyle = `rgb(${color[0] * 255} ${color[1] * 255} ${color[2] * 255})`
                        ctx.fillRect(
                            scr_x,
                            scr_y,
                            pixelSize,
                            pixelSize
                        )
                    }
                }
            })
        }]
    }
}
