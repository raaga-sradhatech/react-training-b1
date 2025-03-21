import { useState } from "react";
function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const calca = (x,a,b) => {
      
      if((a==0 || b==0 ) && (x=='div')){
        return 'Invalid input';
      }

      switch(x){
        case 'add':
          return add(a,b);
        case 'sub':
          return sub(a,b);
        case 'mul':
          return mul(a,b);
        case 'div':
          return div(a,b);
      }
    }
    

  
    const handleSubmit = (e) => {
      //e.preventDefault();
      console.log('Form submitted:', formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
    );
}

  export default ContactForm;