import React from 'react';
import { Modal } from 'semantic-ui-react';

import { Fade }                       from 'react-reveal';

const WelcomeModal = (props) => {
	return(
		<div className='welcome'>
			<Modal basic open={props.showModal}>
				<Modal.Content>
					<div className='title-copy'>
						<Fade cascade clear>
							<h1 className='title'>the carousel</h1>
							<h2>film and digital photography by <a href='johnhardberger.com'>john hardberger</a></h2>
							<h2>for best experience, make window as large as possible</h2>
							<div className='enter-button' onClick={props.handleShowModal}>
								<a href='#photos'><h2 className='enter'>enter</h2></a>
							</div>
						</Fade>
					</div>			
				</Modal.Content>	
			</Modal>
		</div>
	)
}
export default WelcomeModal;