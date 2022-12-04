import PropTypes from "prop-types"
import styles from './Section.module.css';

export default function Section({ title, children })
{
return (
<section className={title ? styles.superSection : styles.baseSection }>
    {title && <h2 className={styles.titleStyle}>{title}</h2>}
    {children}
</section>
);
}

Section.propTypes = {
    title:PropTypes.string,
    children:PropTypes.node.isRequired,
}

