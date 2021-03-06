import React, { PropTypes } from 'react';

const propTypes = {
	nextQuestion: PropTypes.func.isRequired,
	previousQuestion: PropTypes.func.isRequired,
};

const QuizPaginationComponent = (props) => (
	<div>
		<label>PREVIOUS
			<input
				type="button"
				onClick={props.previousQuestion}
				className="pagination-previous-button"
				placeholder="PREVIOUS"
			/>
		</label>
		<label>NEXT
			<input
				type="button"
				onClick={props.nextQuestion}
				className="pagination-next-button"
				placeholder="NEXT"
			/>
		</label>
	</div>
);

QuizPaginationComponent.propTypes = propTypes;

export default QuizPaginationComponent;
