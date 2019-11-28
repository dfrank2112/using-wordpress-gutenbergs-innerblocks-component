// WordPress
const { InnerBlocks } = wp.editor;

// Theme
import namespace from '../../namespace';

const edit = ({ className }) => {
    const allowedBlocks = ['core/paragraph', 'core/heading'];
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
            />
        </section>
    );
};
export default edit;
