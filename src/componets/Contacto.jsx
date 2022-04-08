
import { Formik } from 'formik';
import React, {useState, useEffect} from 'react';
import './styles/contacto.css'
import AOS from 'aos';

export function Contacto() {
	  useEffect(() => {
		AOS.init();
		AOS.refresh(); 
	}, []);
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!'); 
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

	return ( 
		<div data-aos="fade-up"  data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="400" className='formulario-contacto'>
		<Formik
			initialValues={{
				nombre:'carlos',
				correo:'saadadas',
				asunto:'asaa'
			}}
				onSubmit={()=>{
					console.log("For")
				}}
			
		>
			{(values,handleSubmit)=> (
				<form action="" onSubmit={handleSubmit} className="formulario">
				<h1 className='text'>Contacto</h1>

				<div className="entradas">
					<ul>
						<li>
							<input type="text" id="nombre" value={values.nombre}  placeholder='Nombre'/>
						</li>
						<li>
							<input type="text" id="asunto" value={values.asunto} placeholder='Asunto' />
						</li>
						<li>
							<input type="text" id="correo" value={values.correo}  placeholder='Correo'/>
						</li>
						<li>
							<textarea name="mensaje" placeholder='Mensaje' id="" cols="10" rows="50"></textarea>
						</li>
						<li>
							<button  type='submit'>Enviar</button>
						</li>
					</ul>
						
				</div>
				</form>
			)}
		</Formik>
		</div>
	);
}
 