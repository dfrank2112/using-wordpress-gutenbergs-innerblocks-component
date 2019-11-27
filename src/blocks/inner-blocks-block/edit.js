// WordPress
const { InnerBlocks } = wp.editor;

// Theme
import namespace from '../../namespace';

const edit = ({ className }) => {
    return (
        <section
            className={
                `${ className } 
                    wp-block--${ namespace } 
                    u-relative-hidden
                    is-back-end`
            }
        >
            <InnerBlocks />
        </section>
    );
};
export default edit;
