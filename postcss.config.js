import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'

export default {
	plugins: [
		autoprefixer,
		postcssPresetEnv({
			stage: 0,
		}),
		cssnano({
			preset: 'default',
		}),
	],
}
