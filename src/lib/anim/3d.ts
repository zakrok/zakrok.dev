
import {getMvp} from "$lib/anim/UglAlpha";
import {matrix, multiply} from "mathjs";
import type {ArttAnimation} from "$lib/anim/ArttAnimation";

const cornellBox = [
    { vertices: [[1.010000, -0.000000, -0.990000, 1], [-1.000000, -0.000000, -0.990000, 1], [-1.000000, 0.000000, 1.040000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[1.010000, -0.000000, -0.990000, 1], [-1.000000, 0.000000, 1.040000, 1], [0.990000, 0.000000, 1.040000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[1.020000, 1.990000, -0.990000, 1], [1.020000, 1.990000, 1.040000, 1], [-1.000000, 1.990000, 1.040000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[1.020000, 1.990000, -0.990000, 1], [-1.000000, 1.990000, 1.040000, 1], [-1.000000, 1.990000, -0.990000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.990000, 0.000000, 1.040000, 1], [-1.000000, 0.000000, 1.040000, 1], [-1.000000, 1.990000, 1.040000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.990000, 0.000000, 1.040000, 1], [-1.000000, 1.990000, 1.040000, 1], [1.020000, 1.990000, 1.040000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[-1.000000, 0.000000, 1.040000, 1], [-1.000000, -0.000000, -0.990000, 1], [-1.000000, 1.990000, -0.990000, 1]], color: [1, 1, 1] },
    { vertices: [[-1.000000, 0.000000, 1.040000, 1], [-1.000000, 1.990000, -0.990000, 1], [-1.000000, 1.990000, 1.040000, 1]], color: [1, 1, 1] },
    { vertices: [[1.010000, -0.000000, -0.990000, 1], [0.990000, 0.000000, 1.040000, 1], [1.020000, 1.990000, 1.040000, 1]], color: [1, 1, 1] },
    { vertices: [[1.010000, -0.000000, -0.990000, 1], [1.020000, 1.990000, 1.040000, 1], [1.020000, 1.990000, -0.990000, 1]], color: [1, 1, 1] },
    { vertices: [[-0.530000, 0.600000, -0.750000, 1], [-0.700000, 0.600000, -0.170000, 1], [-0.130000, 0.600000, -0.000000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[-0.530000, 0.600000, -0.750000, 1], [-0.130000, 0.600000, -0.000000, 1], [0.050000, 0.600000, -0.570000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.050000, -0.000000, -0.570000, 1], [0.050000, 0.600000, -0.570000, 1], [-0.130000, 0.600000, -0.000000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.050000, -0.000000, -0.570000, 1], [-0.130000, 0.600000, -0.000000, 1], [-0.130000, 0.000000, 0.000000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[-0.530000, -0.000000, -0.750000, 1], [-0.530000, 0.600000, -0.750000, 1], [0.050000, 0.600000, -0.570000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[-0.530000, -0.000000, -0.750000, 1], [0.050000, 0.600000, -0.570000, 1], [0.050000, -0.000000, -0.570000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[-0.700000, -0.000000, -0.170000, 1], [-0.700000, 0.600000, -0.170000, 1], [-0.530000, 0.600000, -0.750000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[-0.700000, -0.000000, -0.170000, 1], [-0.530000, 0.600000, -0.750000, 1], [-0.530000, -0.000000, -0.750000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[-0.130000, 0.000000, 0.000000, 1], [-0.130000, 0.600000, -0.000000, 1], [-0.700000, 0.600000, -0.170000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[-0.130000, 0.000000, 0.000000, 1], [-0.700000, 0.600000, -0.170000, 1], [-0.700000, -0.000000, -0.170000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.530000, 1.200000, -0.090000, 1], [-0.040000, 1.200000, 0.090000, 1], [0.140000, 1.200000, 0.670000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.530000, 1.200000, -0.090000, 1], [0.140000, 1.200000, 0.670000, 1], [0.710000, 1.200000, 0.490000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.530000, -0.000000, -0.090000, 1], [0.530000, 1.200000, -0.090000, 1], [0.710000, 1.200000, 0.490000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.530000, -0.000000, -0.090000, 1], [0.710000, 1.200000, 0.490000, 1], [0.710000, 0.000000, 0.490000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.710000, 0.000000, 0.490000, 1], [0.710000, 1.200000, 0.490000, 1], [0.140000, 1.200000, 0.670000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.710000, 0.000000, 0.490000, 1], [0.140000, 1.200000, 0.670000, 1], [0.140000, 0.000000, 0.670000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.140000, 0.000000, 0.670000, 1], [0.140000, 1.200000, 0.670000, 1], [-0.040000, 1.200000, 0.090000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.140000, 0.000000, 0.670000, 1], [-0.040000, 1.200000, 0.090000, 1], [-0.040000, 0.000000, 0.090000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[-0.040000, 0.000000, 0.090000, 1], [-0.040000, 1.200000, 0.090000, 1], [0.530000, 1.200000, -0.090000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[-0.040000, 0.000000, 0.090000, 1], [0.530000, 1.200000, -0.090000, 1], [0.530000, -0.000000, -0.090000, 1]], color: [0.8, 0.8, 0.8] },
    { vertices: [[0.240000, 1.980000, -0.160000, 1], [0.240000, 1.980000, 0.220000, 1], [-0.230000, 1.980000, 0.220000, 1]], color: [1.0, 1.0, 1.0] },
    { vertices: [[0.240000, 1.980000, -0.160000, 1], [-0.230000, 1.980000, 0.220000, 1], [-0.230000, 1.980000, -0.160000, 1]], color: [1.0, 1.0, 1.0] }
];

export function d3(windowWidth: number, windowHeight: number): ArttAnimation {
    let siz = 50
    let pixelSize = 5
    const lightProp = [0.8, 0.8, 0.8]
    const discretize = 50


    return {
        frames: [ctx => {
            let now = Date.now()
            const zBuffer = new Array(windowWidth * windowHeight).fill(Infinity);

            const mvp = getMvp(siz, siz)

            const lightPos = [0, 1, 3]
            // [1.7, 4.7]
            const period = 5
            const x = (now * 0.0004) % period
            const t = Math.abs(period/2 - x) + 2
            const scale = 0.5;
            const transformMatrix = matrix([
                [Math.cos(t) * scale, 0, Math.sin(t) * scale, 0],
                [0, scale, 0, 0],
                [-Math.sin(t) * scale, 0, Math.cos(t) * scale, 0],
                [0, 0, 0, 1]
            ])

            cornellBox.forEach(triangle => {
                const worldA = multiply(transformMatrix, triangle.vertices[0]);
                const worldB = multiply(transformMatrix, triangle.vertices[1]);
                const worldC = multiply(transformMatrix, triangle.vertices[2]);

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
                        const scr_y = windowHeight - windowHeight/3 + (py * pixelSize);
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
