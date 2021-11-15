import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto py-7 flex justify-center align-items-center'>
            <form>
                <div className='mb-3'>
                    <input type="text" name="subject" placeholder='Subject' />
                </div>
                <div className='mb-3'>
                    <textarea name="object"  cols="30" rows="10" placeholder='Object'/>
                </div>



                <button className='bg-primary-main text-primary-text hover:bg-primary-hover rounded-lg py-2 px-4' type='submit'>Envoye</button>

            </form>
        </div>

    );
};

export default About;