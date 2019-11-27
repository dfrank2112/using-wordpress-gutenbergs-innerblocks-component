// WordPress
const { InnerBlocks } = wp.editor;

// Theme
import namespace from '../../namespace';

const save = ({ className }) => {
    return (
        <section
            className={
                `${className}
                 wp-block--${ namespace } 
                 u-relative-hidden 
                 is-front-end`
            }
        >
            <InnerBlocks.Content />
        </section>
    );
};

export default save;
