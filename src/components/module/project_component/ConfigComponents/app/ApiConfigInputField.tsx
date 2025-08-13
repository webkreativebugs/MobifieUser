interface PROPS{
    title:string
}

const ApiConfigInputField = ({title}:PROPS) => {
  return (
    <div>
     <label>{title}</label>
     <input/>
    </div>
  )
}

export default ApiConfigInputField
