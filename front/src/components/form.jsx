import React from 'react';

const Form = props => {
    return (
        <section id="form" className="formContainer py-5">
            <div className="subForm col-md-8 offset-md-2 px-auto py-5 shadow-sm rounded position-inherit" >
                <div className="row">
                    <div className="col position-inherit">
                        <h1>Escribenos!</h1>
                        <h4>Cuentanos tu problema y nos ponemos en contacto lo antes posible!</h4>
                    </div>
                </div>
                <div>
                    <form className="col-md-8 offset-md-2 position-inherit">
                        <div className="form-row" >
                            <div className="col position-inherit" >
                                <input type="text" className="form-control my-2" placeholder="Nombre y Apellido" />
                            </div>
                        </div>
                        <div className="form-row" >
                            <div className="col position-inherit">
                                <input type="text" className="form-control my-2" placeholder="Teléfono - +569XXXXXXXX" />
                            </div>
                        </div>
                        <div className="form-row" >
                            <div className="col position-inherit">
                                <input type="email" className="form-control my-2" placeholder="Correo Electrónico" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col position-inherit">
                                <textarea class="form-control my-2" id="textArea" rows="8" placeholder="Cuentame aquí como te puedo ayudar..."></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Form;