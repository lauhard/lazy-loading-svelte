<script lang="ts">
    const copyrightNotice = () =>
         `© Andreas Lauhard,  ${new Date().getFullYear()}`
</script>
<footer>
    <slot name="stock-images">

    </slot>
    <p class="legal-notice">{copyrightNotice()}</p>
</footer>

<style lang="scss">

    footer{
        padding: var(--padding-side);
        background-color: var(--background-color);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
        .legal-notice{
            width: 100%;
            bottom: 0;
            height: 100%;
            margin-top: 2rem;
            font-weight:bold;
        }
    }
</style>
