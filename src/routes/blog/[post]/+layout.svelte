<script lang="ts">
    let { children } = $props();
</script>

<nav class="font-pixel text-white w-1/2 mx-auto mb-12 mt-6">
    <a href="/" class="underline">home</a>
    <a href="/projects" class="underline">projects</a>
    <a href="/blog" class="underline">blog</a>
    <a href="/about" class="underline">about</a>
</nav>

<main class="w-3/4 m-auto
            prose
            prose-blockquote:text-white
            prose-h1:text-white
            prose-h2:text-white
            prose-p:text-white
            prose-kbd:text-white
            prose-a:text-white
            prose-code:text-white
            prose-ul:text-white
            prose-il:text-white
            font-pixel">
    {@render children()}
</main>
