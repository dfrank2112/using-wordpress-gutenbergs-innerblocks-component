// WordPress
const { InnerBlocks } = wp.editor;

// Theme
import namespace from '../../namespace';

const edit = ({ className }) => {
    const
        allowedBlocks = [
            'core/paragraph',
            'core/heading',
            'core/columns',
            'core/column',
            'core/image'
        ],
        template = [
            [ 'core/columns', {}, [
                [ 'core/column', {}, [
                    [ 'core/image' ],
                ] ],
                [ 'core/column', {}, [
                    [ 'core/paragraph', { placeholder: 'Enter side content...' } ],
                ] ],
            ] ]
        ];

    return (
        <section
            className={
                `${ className } 
                    wp-block--${ namespace } 
                    u-relative-hidden
                    is-back-end`
            }
        >
            <InnerBlocks
                allowedBlocks={ allowedBlocks }
                template={ template }
            />
        </section>
    );
};
export default edit;
