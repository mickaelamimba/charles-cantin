import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const About = () => {
    const [state, handleSubmit] = useForm("xdoyqppo");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div onSubmit={handleSubmit} className='flex justify-center align-items-center '>
            <div className='flex-1'>
                <form >
                    <div className='md:grid grid-cols-2 gap-5'>
                        <div>
                            <input className='form-input mt-1 block w-full'
                                type="text"
                                placeholder='Nom'
                                name="name"
                            />
                            <ValidationError
                                prefix="Nom"
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                        <div>
                            <input
                                className='form-input mt-1 block w-full'
                                type="text"
                                placeholder='Prénom'
                                name="firstName"
                            />
                            <ValidationError
                                prefix="Prénom"
                                field="firstName"
                                errors={state.errors}
                            />
                        </div>

                    </div>
                    <div>
                        <input
                            className='form-input mt-1 block w-full'
                            type="email"
                            placeholder='Votre Email'
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='mb-3'>
                        <input className='form-input mt-1 block w-full' type="text" name="subject" placeholder='Subject' />
                    </div>
                    <div className='mb-3'>
                        <textarea className='form-input mt-1 block w-full' name="message"  cols="30" rows="10" placeholder='Object'/>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>



                    <button className='bg-primary-main text-primary-text hover:bg-primary-hover rounded-lg py-2 px-4 mb-3' type='submit'>Envoye</button>

                </form>
            </div>

        </div>

    );
};

export default About;