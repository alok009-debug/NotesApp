import { RiAddLargeLine } from 'react-icons/ri';
import Card from './Card';

const Right = () => {

    return (
        <div className='right'>
            <div className='right-top'>
                <div className='left-head'>
                    <h2>My Notes</h2>
                    <p>Organize your ideas, audio, visusal cards and daily plans.</p>
                </div>

                <div className='right-searchBar'>
                    <form>
                        <input
                            type="text"
                            name="search"
                            placeholder='Search Notes or tags...'
                        />
                    </form>
                    <div className='right-createNoteButton'>
                        <button>
                            <RiAddLargeLine />
                        </button>
                    </div>
                </div>
            </div>
            <div className='notes-section'>
                <div className='notes-tag'>
                    <div className='tag'>All 
                        <span>
                            {3}
                        </span>
                    </div>
                    <div className='tag'>Important</div>
                    <div className='tag'>To-do</div>
                    <div className='tag'>Lectures</div>
                </div>
                <div className='notes-card-section'>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Right