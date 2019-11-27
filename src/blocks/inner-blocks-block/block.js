// WordPress
const
    { __ } = wp.i18n,
    { registerBlockType } = wp.blocks;

// Theme
import edit from './edit';
import save from './save';
import * as icon from './icon';
import namespace from '../../namespace';

registerBlockType(`${ namespace }/inner-blocks-block`, {
    title: __('InnerBlocks Test Block', namespace),
    icon: {
        src: icon.block
    },
    keywords: [
        __('Render', namespace),
        __('Compose', namespace),
        __('JAB', namespace),
    ],
    category: 'common',
    attributes: [],
    edit,
    save
});
