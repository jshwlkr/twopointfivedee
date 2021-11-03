/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {

	const id = attributes.instanceId;

	return (
		<div>
			<div className='wp-block-oddities-twopointfivedee-wrap' style={{ paddingTop: + attributes.ratio + '%' }} >
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					width="100%"
					height="100%"
					xmlSpace="preserve"
				>
					<filter id="prefix__effect-1">
						<feGaussianBlur stdDeviation="2" />
					</filter>
					<style>
					{
						"@keyframes parallax-front{0%,to{transform:scale(1)}50%{transform:scale(1.45)}}@keyframes parallax-mid{0%,to{transform:scale(1)}50%{transform:scale(1.2)}}"
					}
					</style>
					<image
						className="layer-back"
						href={ attributes.backMediaURL }
						width="100%"
						height="100%"
						style={{
							transformOrigin: "50% 50%",
						}}
						filter="url(#prefix__effect-1)"
					/>
					<image
						className="layer-mid"
						href={ attributes.midMediaURL }
						width="100%"
						height="100%"
						style={{
							transformOrigin: "50% 50%",
							animation: "parallax-mid 25s infinite linear",
						}}
					/>
					<image
						className="layer-front"
						href={ attributes.frontMediaURL }
						width="100%"
						height="100%"
						style={{
							transformOrigin: "50% 50%",
							animation: "parallax-front 25s infinite ease-in-out",
						}}
						filter="url(#prefix__effect-1)"
					/>
				</svg>
			</div>
		 </div>
	);
}
