interface ProgressBarProps {
    progress: number;
  }
const ProgressBar : React.FC<ProgressBarProps> = ({ progress }) => {
    const containerStyle = {
        width: '90%',
        height: '5px',
        backgroundColor: '#ddd',
        marginTop: '3px',
        borderRadius:'4px'
    };

    const progressStyle = {
        height: '100%',
        backgroundColor: '#333333', /* Green color */
        textAlign: 'center',
        lineHeight: '20px',
        color: '#fff',
        borderRadius:'4px',
        width: `${progress}%`,
    };

    return (
        <>
            <span style={{ padding: '0 3px' }}>{`Completion : ${progress}%`}</span>
            <div style={containerStyle}>

                <div style={progressStyle}>

                    {progress > 0}
                </div>
            </div>
        </>
    );
};

export default ProgressBar;
