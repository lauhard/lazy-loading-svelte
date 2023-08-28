<script lang="ts">
    import cat1 from "$lib/images/cat1.jpg";
    import cat2 from "$lib/images/cat2.jpg";
    import cat3 from "$lib/images/cat3.jpg";
    import {
        observerAction,
        observer,
    } from "$lib/actions/intersectionObserver";
    const handleObserver = async (e: CustomEvent) => {
        const event = e.detail;
        const node = event.node.target as HTMLElement;

        // observer.unobserve(node);
        if (node.hasChildNodes()) {
            node.childNodes.forEach((child) => {
                if (child.nodeName === "IMG") {
                    let img = child as HTMLImageElement;

                    if (event.isIntersecting === true) {
                        img.src = img.dataset.src as string;
                        // img.style.display = "block";
                        if(img?.src.length > 0) {
                            img.style.opacity = "1";
                            img.style.transition = "all 2s ease-in-out";
                            return;
                        }
                        img.onload = () => {
                            img.style.opacity = "1";
                            img.style.transition = "all 2s ease-in-out";
                        };
                    } else {
                        img.style.opacity = "0";
                        img.style.transition = "all 2s ease-in-out";
                    }
                }
            });
        }
    };

    const prop: IntersectionObserverInit = {
        rootMargin: "200px",
    };
</script>

<section>
    <h1>Lazy loading with SvelteKit</h1>
    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
    <div
        class="viewport"
        use:observerAction={{ prop }}
        on:observe={handleObserver}
    >
        <div class="item">
            <img data-src={cat1} alt="cat1" srcset="" />
            <div class="placeholder" />
        </div>
        <div class="item">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi nostrum inventore, esse, ea animi atque officiis quaerat
                consequatur magni officia architecto? Aliquid voluptates
                excepturi, dolor alias iure dolorem voluptatibus impedit.
            </p>
        </div>
        <div class="item">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis at iure, illo accusamus vitae veniam modi ullam
                commodi magni excepturi voluptatum nostrum omnis veritatis. Sed
                labore ducimus odit voluptatibus illum.
            </p>
        </div>
        <div class="item">
            <img data-src="{cat2}" alt="cat2" srcset="" />
            <div class="placeholder" />
        </div>
        <div class="item">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, dolor! Ullam officia amet autem expedita veritatis
                perferendis. Nam debitis modi quisquam labore beatae qui,
                nostrum quas vero cum placeat veniam!
            </p>
        </div>
        <div class="item">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur consectetur id consequatur harum amet, sunt ipsum
                quibusdam exercitationem quas labore veritatis illum maiores
                officiis officia. Laudantium sequi officia eveniet eius?
            </p>
        </div>
        <div class="item">
            <img data-src={cat3} alt="cat3" srcset="" />
            <div class="placeholder" />
        </div>
    </div>
</section>

<style lang="scss">
    h1 {
        color: var(--accent);
    }
    section {
        max-width: var(--content-width);
        padding: var(--padding-side);
        height: 100%;
        width: 100%;
        align-self: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        .viewport {
            width: 100%;
            max-height: 60vh;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            overflow-y: scroll;
            .item {
                min-height: 200px;
                height: 200px;
                overflow: hidden;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                position: relative;
                transition: all 1s ease-in-out;

                img,
                .placeholder {
                    position: relative;
                    display: flex;
                    opacity: 0;
                    height: auto;
                    min-width: 160px;
                    // width: 160px;
                    object-fit: fill;
                    aspect-ratio: auto;
                    transition: all 2s ease-in-out;
                    border-radius: 10px;
                    z-index: 10;
                    overflow: hidden;
                }
                p {
                    width: 50%;
                    height: auto;
                    transition: all .5s ease-in-out;
                    color:white;
                    padding: 1rem;
                    border-radius: 5px;

                }
                p:hover {
                    
                    background: linear-gradient(
                        45deg,
                        var(--primary),
                        var(--primary-hover),
                        var(--secondary),
                        var(--secondary-hover)
                    );
                    background-size: 400% 400%;
                    animation: gradient 5s ease infinite;
                    transition: all .5s ease-in-out;
                    color:black;

                    // color: #fff;
                    // box-shadow: inset 200px 0 0 0 #54b3d6;
                }
                .placeholder {
                    position: absolute;
                    background-color: rgb(74, 74, 74);
                    background: linear-gradient(
                        45deg,
                        var(--primary),
                        var(--primary-hover),
                        var(--secondary),
                        var(--secondary-hover)
                    );
                    background-size: 300%;
                    animation: gradient 3s ease infinite;
                    height: 100vh;
                    height: 200px;
                    transform: translateX(-50%);
                    opacity: 1;
                    z-index: 1;
                    left: 50%;
                    width: 160px;
                    border-radius: 10px;
                }
            }
        }
    }
    @keyframes gradient {
        0% {
            background-position: 0% 0%;
        }

        50% {
            background-position: 100% 50%;

        }

        100% {
            background-position: 0% 0%;
        }
    }
</style>
