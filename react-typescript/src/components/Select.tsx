
import styles from '../Select.module.css'
type SelectOptions = {
    label: string;
    value: string | number;
}


type SelectProps = {
    options: SelectOptions[]
    onChange: (value?: SelectOptions)=>void
    value?: SelectOptions
}
function Select ({options, onChange}:SelectProps) {
    return (
        <div className={styles.container} tabIndex={0}>
            <span className={styles.value}>Value</span>
            <button className={styles["clear-btn"]}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={styles.options}>
                {
                    options.map(option => (
                        <li className='styles.option'>
                            {option.label}{option.value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Select