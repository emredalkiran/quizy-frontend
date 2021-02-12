export default function formInput(props) {

  return(     
     <div className="input-wrapper">
      <label className="label" htmlFor="name">{ props.label }</label>
      <input type={ props.type } name={props.fieldName}  className={ `input ${(props.errorMessage !== '' && props.touched) ? 'is-danger': ''}` } onBlur={ props.blur } onChange={ props.change } value={props.inputValue} />
      { (props.errorMessage !== '' && props.touched) ? (
        <div className="input-error">{ props.errorMessage }</div> ) : ''
      }
  </div>)
}