export default {
    name: 'module-alias',
    resolveId(importee, importer, resolveOptions) {
        console.log(importee)
        if (importee.startsWith('svelte'))
            return { id: `https://unpkg.com/svelte@3.44.2${importee.substring(6)}/index.mjs`, external: true }
            // return { id: `/${importee}/index.mjs`, external: true }

        return null;
    }
}