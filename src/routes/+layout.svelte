<script lang=ts>
    import '../app.css'
    import Footer from '$lib/components/footer.svelte'
</script>


<div class="app">
    <main>
        <slot>
        
        </slot>
    </main>
    <Footer>
        <ul slot="stock-images">
            <p>stock images provided from:</p>
            <li>
                <a href="https://unsplash.com/de/@l_oan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Loan</a> auf <a href="https://unsplash.com/de/fotos/7AIDE8PrvA0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </li>
            <li>
                <a href="https://unsplash.com/de/@raouldroog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Raoul Droog</a> auf <a href="https://unsplash.com/de/fotos/yMSecCHsIBc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </li>
            <li>
                <a href="https://unsplash.com/de/@lettherebelight?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex D.</a> auf <a href="https://unsplash.com/de/fotos/J93PXpBPCFI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </li>
        </ul>
    </Footer>
</div>




<style lang="scss">
    li{
        width: 100%;
        list-style: circle;
        margin-left: 1rem;
    }

    .app{
        height: 100vh;
        max-height: 100%;
        position: relative;
        width: 100%;
    }
    main{
        padding: 0 var(--padding-side);
        margin: 0 auto;
        width: 100%;
        height: 100%;    
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;

    }
</style>


