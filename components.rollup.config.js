import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import glob from 'glob';
import moduleAlias from './module-alias';

const production = !process.env.ROLLUP_WATCH;

export default glob.sync('src/components/*.svelte')
	.map(x => ({
		input: x,
		makeAbsoluteExternalsRelative: 'ifRelativeSource',
		output: {
			sourcemap: true,
			format: 'esm',
			file: x
				.replace('src/', 'public/')
				.replace('.svelte', '.js')
		},
		plugins: [
			moduleAlias,
			svelte({ dev: !production }),
			resolve({
				browser: true,
				dedupe: ['svelte'],
			}),
			commonjs(),
			production && terser()
		],
		watch: { clearScreen: false }
	}));