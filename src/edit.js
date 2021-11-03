/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import {
	Button,
	Panel,
	PanelBody,
	PanelRow,
	Placeholder
} from '@wordpress/components';

import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.css';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, className, setAttributes } ) {

	const ALLOWED_MEDIA_TYPES = ['image'];

	const onSelectBackLayer = value => {
		const ratio = value.height / value.width * 100;
		if ( ratio < attributes.ratio ) ratio = attributes.ratio;
		setAttributes( {
			ratio: ratio,
			backMediaID: value.id,
			backMediaURL: value.url,
		} );
	}

	const onSelectMidLayer = value => {
		const ratio = value.height / value.width * 100;
		if ( ratio < attributes.ratio ) ratio = attributes.ratio;
		setAttributes( {
			ratio: ratio,
			midMediaID: value.id,
			midMediaURL: value.url,
		} );
	}

	const onSelectFrontLayer = value => {
		const ratio = value.height / value.width * 100;
		if ( ratio < attributes.ratio ) ratio = attributes.ratio;
		setAttributes( {
			ratio: ratio,
			frontMediaID: value.id,
			frontMediaURL: value.url,
		} );
	}

	const onChangeAlt = value => {
		setAttributes({ alt: value });
	}

	//TODO change classNames to something more succinct

	return (
		<>
			{ ( attributes.backMediaID && attributes.midMediaID )
				?
				<div>
					<div className='wp-block-oddities-twopointfivedee-wrap' style={{ paddingTop: + attributes.ratio + '%' }}>
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
					'@keyframes parallax-front{0%,to{transform:scale(1)}50%{transform:scale(1.45)}}@keyframes parallax-mid{0%,to{transform:scale(1)}50%{transform:scale(1.2)}}'
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
				:
					<Placeholder label="Placeholder" />
			}
			<InspectorControls>
				<MediaUploadCheck>
					<Panel>
						<PanelBody title="Back Layer" initialOpen={ true }>
							<PanelRow>
								<MediaUpload
									type='image'
									onSelect={ onSelectBackLayer }
									allowedTypes={ ALLOWED_MEDIA_TYPES }
									value={ attributes.backMediaID }
									render ={ ( { open } ) => (
										<Button
											className={ 'button' }
											onClick={ open }
										>
											{ ! attributes.backMediaID ? (
												__( 'Set back Layer', 'twopointfivedee' )
											) : (
												<img src={ attributes.backMediaURL } />,
												__( 'Replace back layer', 'twopointfivedee' )
											)}
										</Button>
									) }
								/>
							</PanelRow>
							<PanelRow>
								<p>This layer is required.</p>
							</PanelRow>
						</PanelBody>
						<PanelBody title="Mid Layer" initialOpen={true}>
							<PanelRow>
								<MediaUpload
									type='image'
									onSelect={ onSelectMidLayer }
									allowedTypes={ ALLOWED_MEDIA_TYPES }
									value={ attributes.midMediaID }
									render ={ ( { open } ) => (
										<Button
											className={ 'button' }
											onClick={ open }
										>
											{ ! attributes.midMediaID ? (
												__( 'Set mid Layer', 'twopointfivedee' )
											) : (
												<img src={ attributes.midMediaURL } />,
												__( 'Replace mid layer', 'twopointfivedee' )
											)}
										</Button>
									) }
								/>
							</PanelRow>
							<PanelRow>
								<p>This layer is required.</p>
							</PanelRow>
						</PanelBody>
						<PanelBody title="Front Layer" initialOpen={true}>
							<PanelRow>
								<MediaUpload
									type='image'
									onSelect={ onSelectFrontLayer }
									allowedTypes={ ALLOWED_MEDIA_TYPES }
									value={ attributes.frontMediaID }
									render ={ ( { open } ) => (
										<Button
											className={ 'button' }
											onClick={ open }
										>
											{ ! attributes.frontMediaID ? (
												__( 'Set front Layer', 'twopointfivedee' )
											) : (
												<img src={ attributes.frontMediaURL } />,
												__( 'Replace front layer', 'twopointfivedee' )
											)}
										</Button>
									) }
								/>
							</PanelRow>
							<PanelRow>
								<p>This layer is optional.</p>
							</PanelRow>
						</PanelBody>
					</Panel>
				</MediaUploadCheck>
			</InspectorControls>
		</>
	);
}
