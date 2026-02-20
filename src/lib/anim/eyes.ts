import type {ArttAnimation} from "$lib/anim/ArttAnimation";

export function eyes(screenWidth: number, screenHeight: number): ArttAnimation {
    const frames: ((ctx: CanvasRenderingContext2D) => void)[] = [];

    const mid = [screenWidth/2, screenHeight/2]

    for (let i = 1; i < 5; i++) {
        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] - 200 - 50, mid[1] - 10*i, 200, 20 * i)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0], mid[1] - 10*i, 200, 20 * i)

            ctx.fillStyle = 'black'
            ctx.fillRect(mid[0] - 50 - 50, mid[1] - 20, 40, 40)

            ctx.fillStyle = 'black'
            ctx.fillRect(mid[0] + 10, mid[1] - 20, 40, 40)
        })
    }

    for (let i = 0; i < 10; i++) {
        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] - 200 - 50, mid[1] - 50, 200, 100)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0], mid[1] - 50, 200, 100)

            ctx.fillStyle = 'black'
            ctx.fillRect(mid[0] - 50 - 50, mid[1] - 20, 40, 40)

            ctx.fillStyle = 'black'
            ctx.fillRect(mid[0] + 10, mid[1] - 20, 40, 40)
        })
    }

    for (let i = 5; i > 0; i--) {
        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] - 200 - 50, mid[1] - 10*i, 200, 20 * i)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0], mid[1] - 10*i, 200, 20 * i)

            ctx.fillStyle = 'black'
            ctx.fillRect(mid[0] - 50 - 50, mid[1] - 20, 40, 40)

            ctx.fillStyle = 'black'
            ctx.fillRect(mid[0] + 10, mid[1] - 20, 40, 40)
        })
    }

    for (let i = 0; i < 15; i++) {
        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] - 200 - 50, mid[1] - 10, 200, 20)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0], mid[1] - 10, 200, 20)

            ctx.fillStyle = 'black'
            ctx.fillRect(mid[0] - 50 - 50, mid[1] - 20, 40, 40)

            ctx.fillStyle = 'black'
            ctx.fillRect(mid[0] + 10, mid[1] - 20, 40, 40)
        })
    }

    frames.push(ctx => {
        ctx.fillStyle = 'white'
        ctx.fillRect(mid[0] - 200 - 50, mid[1] - 30, 70, 20)

        ctx.fillStyle = 'white'
        ctx.fillRect(mid[0] + 130, mid[1] - 30, 70, 20)

        ctx.fillStyle = 'white'
        ctx.fillRect(mid[0] - 200 - 50, mid[1] - 10, 200, 20)

        ctx.fillStyle = 'white'
        ctx.fillRect(mid[0], mid[1] - 10, 200, 20)

        ctx.fillStyle = 'black'
        ctx.fillRect(mid[0] - 50 - 50, mid[1] - 20, 40, 40)

        ctx.fillStyle = 'black'
        ctx.fillRect(mid[0] + 10, mid[1] - 20, 40, 40)
    })

    frames.push(ctx => {
        ctx.fillStyle = 'white'
        ctx.fillRect(mid[0] - 200 - 50, mid[1] - 50, 70, 20)

        ctx.fillStyle = 'white'
        ctx.fillRect(mid[0] + 130, mid[1] - 50, 70, 20)

        ctx.fillStyle = 'white'
        ctx.fillRect(mid[0] - 200 - 50, mid[1] - 30, 100, 20)

        ctx.fillStyle = 'white'
        ctx.fillRect(mid[0] + 100, mid[1] - 30, 100, 20)

        ctx.fillStyle = 'white'
        ctx.fillRect(mid[0] - 200 - 50, mid[1] - 10, 200, 20)

        ctx.fillStyle = 'white'
        ctx.fillRect(mid[0], mid[1] - 10, 200, 20)

        ctx.fillStyle = 'black'
        ctx.fillRect(mid[0] - 50 - 50, mid[1] - 20, 40, 40)

        ctx.fillStyle = 'black'
        ctx.fillRect(mid[0] + 10, mid[1] - 20, 40, 40)
    })

    for (let i = 0; i < 15; i++) {


        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] - 200 - 50, mid[1] - 70, 50, 20)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] + 150, mid[1] - 70, 50, 20)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] - 200 - 50, mid[1] - 50, 70, 20)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] + 130, mid[1] - 50, 70, 20)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] - 200 - 50, mid[1] - 30, 100, 20)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] + 100, mid[1] - 30, 100, 20)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] - 180 - 50, mid[1], 180, 20)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0], mid[1], 180, 20)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] + 150, mid[1] - 70, 50, 20)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0] - 200 - 50, mid[1] - 10, 200, 20)

            ctx.fillStyle = 'white'
            ctx.fillRect(mid[0], mid[1] - 10, 200, 20)

            ctx.fillStyle = 'black'
            ctx.fillRect(mid[0] - 50 - 50, mid[1] - 20, 40, 40)

            ctx.fillStyle = 'black'
            ctx.fillRect(mid[0] + 10, mid[1] - 20, 40, 40)
        })
    }

    return { frames };
}
