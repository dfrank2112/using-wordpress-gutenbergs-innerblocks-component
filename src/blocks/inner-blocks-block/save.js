// Theme
import namespace from '../../namespace';

const save = ({ attributes, className }) => {
    const { heading, body } = attributes;
    return (
        <section
            className={
                `${className}
                 wp-block--${ namespace } 
                 u-relative-hidden 
                 is-front-end`
            }
        >
            { heading && (
                <h2>
                    { heading }
                </h2>
            ) }

            { body && (
                <p>
                    { body }
                </p>
            ) }
        </section>
    );
};

export default save;
