// WordPress
const
    { TextControl } = wp.components,
    { PlainText } = wp.editor;

// Theme
import namespace from '../../namespace';

const edit = ({ className, attributes, setAttributes }) => {
    const { heading, body } = attributes;
    return (
        <section
            className={
                `${ className } 
                    wp-block--${ namespace } 
                    u-relative-hidden
                    is-back-end`
            }
        >
            <TextControl
                value={ heading }
                onChange={ ( heading ) => setAttributes({ heading }) }
            />

            <PlainText
                onChange={ body => setAttributes({ body }) }
                value={ body }
                placeholder="xyz123"
                className="is-heading"
            />
        </section>
    );
};
export default edit;
