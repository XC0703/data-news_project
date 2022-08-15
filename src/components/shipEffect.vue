<template>
    <div id="container"></div>
</template>

<script>
import * as PIXI from 'pixi.js'

export default {
    name: "shipEffect",
    mounted(){
    this.showEffect();
    },
    methods:{
        showEffect(){
            const loader = new PIXI.Loader();

            loader.add(
                "backgroundTexture",
                "/static/images/ships/lost-at-sea-background.png"
            );
            loader.add(
                "waveTexture1",
                "/static/images/ships/lost-at-sea-wave1.png"
            );
            loader.add(
                "waveTexture2",
                "/static/images/ships/lost-at-sea-wave2.png"
            );
            loader.add(
                "waveTexture3",
                "/static/images/ships/lost-at-sea-wave3.png"
            );
            loader.add(
                "shipTexture",
                "/static/images/ships/lost-at-sea-ship.png"
            );
            loader.add(
                "smokeParticleTexture",
                "/static/images/ships/lost-at-sea-smoke-particle.png"
            );
            loader.add(
                "mistTexture",
                "/static/images/ships/lost-at-sea-mist.png"
            );

            const { innerWidth, innerHeight } = window;

            const resolution = window.devicePixelRatio || 1;
            const m = 1 / resolution;

            const w = innerWidth * m;
            const h = innerHeight * m;

            const app = new PIXI.Application({
  width: w,
  height: h,
  antialias: true,
  backgroundColor: 0x04091c,
  resolution
            });
            var container = document.getElementById('container')
            container.appendChild(app.view);

            const { sin, cos, PI } = Math;
            const tau = 2 * PI;
            const waveStart = -100;
            const waveEnd = 2100;
            const waveHeight = 10;
            const waveWidth = 2.5 * tau;
            const rad = (deg) => (deg / 180) * Math.PI;
            const range = (n, m = 0) =>
            Array(n)
                .fill(m)
                .map((i, j) => i + j);
            const map = (value, sMin, sMax, dMin, dMax) => {
              return dMin + ((value - sMin) / (sMax - sMin)) * (dMax - dMin);
            };
            const rand = (max, min = 0) => min + Math.random() * (max - min);
            const polar = (ang, r = 1, [x = 0, y = 0] = []) => [
  x + r * cos(ang),
  y + r * sin(ang)
            ];

            loader.load((loader, resources) => {
                const scene = new PIXI.Container();
                const shipContainer = new PIXI.Container();
                const smokeParticleContainer = new PIXI.Container();
                const mistParticleContainer = new PIXI.Container();
                app.stage.addChild(scene);

                scene.pivot.set(1000, 500);
                scene.x = w / 2;
                scene.y = h / 2;

                const scale = w / 2000;
                scene.scale.set(scale);

                const background = new PIXI.Sprite(resources.backgroundTexture.texture);

                const numPoints = 100;
                const pointsList = range(3).map(() =>
                range(numPoints + 1).map((i) => {
                    const x = map(i, 0, numPoints, waveStart, waveEnd);
                    const y = waveHeight * sin(map(i, 0, numPoints, 0, waveWidth));
                    return new PIXI.Point(x, y);
                })
                );

                const wave1 = new PIXI.SimpleRope(
                    resources.waveTexture1.texture,
                    pointsList[2]
                );
                const wave2 = new PIXI.SimpleRope(
                    resources.waveTexture2.texture,
                    pointsList[1]
                );
                const wave3 = new PIXI.SimpleRope(
                    resources.waveTexture3.texture,
                    pointsList[0]
                );
                const ship = new PIXI.Sprite(resources.shipTexture.texture);
                wave1.y = 800;
                wave2.y = 860;
                wave3.y = 920;

                const smokeParticles = range(50).map(() => {
                    const particle = new PIXI.Sprite(resources.smokeParticleTexture.texture);
                    particle.scaleOriginal = rand(0.6, 0, 4);
                    particle.angle = rad(rand(-60, -120));
                    particle.offset = rand(200);
                    smokeParticleContainer.addChild(particle);
                    return particle;
                });

                smokeParticleContainer.x = 376;
                smokeParticleContainer.y = 15;

                const mistParticles = range(20).map(() => {
                    const particle = new PIXI.Sprite(resources.mistTexture.texture);
                    particle.scaleOriginal = rand(0.6, 0, 4) * 0.2;
                    particle.offset = rand(2000);
                    particle.scale.set(rand(0.8, 0.5));
                    particle.y += rand(300);
                    mistParticleContainer.addChild(particle);
                    return particle;
                });

                mistParticleContainer.x = -1000;
                mistParticleContainer.y = 200;

                shipContainer.addChild(smokeParticleContainer);
                shipContainer.addChild(ship);
                shipContainer.pivot.set(300, 120);

                shipContainer.x = 1000;
                shipContainer.y = 575;
                scene.addChild(background);

                scene.addChild(wave1);
                scene.addChild(wave2);
                scene.addChild(shipContainer);
                scene.addChild(wave3);
                scene.addChild(mistParticleContainer);

                let smokePlayhead = 0;
                let mistPlayhead = 0;
                let count = 0;
                app.ticker.add(() => {
                count += 0.1;

                for (let listIndex = 0; listIndex < pointsList.length; listIndex++) {
                    const points = pointsList[listIndex];
                    for (let i = 0; i < points.length; i++) {
                    const x = map(i, 0, numPoints, waveStart, waveEnd);
                    const y =
                      waveHeight *
                        sin(
                        map(i, 0, numPoints, 0, waveWidth) +
                          count * 0.2 +
                          tau * listIndex * 0.25
                        );
                    points[i].y = y;
                    points[i].x = x;
                    }
                }

                const shipXStart = 700;
                const shipXEnd = 1300;

                const shipYStart =
                  5 * sin(map(shipXStart, waveStart, waveEnd, 0, waveWidth) + count * 0.2);
                const shipYEnd =
                  5 * sin(map(shipXEnd, waveStart, waveEnd, 0, waveWidth) + count * 0.2);

                const shipRotatedAngle = Math.atan2(
                    shipYEnd - shipYStart,
                    shipXEnd - shipXStart
                );

                ship.rotation = shipRotatedAngle;

                smokePlayhead = (smokePlayhead + 1) % 400;
                smokeParticles.forEach((particle) => {
                    const ph = smokePlayhead + particle.offset;
                    const time = ph % 400;
                    if (time < 2) {
                        particle.angle = rad(rand(-60, -120));
                    }
                    const r = map(time, 0, 400, 0, 250);
                    const [x, y] = polar(particle.angle, r);
                    const alpha = map(time, 0, 400, 1, 0);
                    const scale = map(time, 0, 400, 0.1, particle.scaleOriginal);

                    particle.scale.set(scale);

                    particle.alpha = alpha;
                    particle.x = x;
                    particle.y = y;
                });

                mistPlayhead = (mistPlayhead + 1) % 2000;
                mistParticles.forEach((particle) => {
                    const ph = mistPlayhead + particle.offset;
                    const time = ph % 2000;
                    const x = map(time, 0, 2000, 0, 3500);
                    particle.x = x;
                });
            });
            });
        }
    }

};
</script>

<style lang="scss" scoped>
#container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #04091c;
}
</style>


