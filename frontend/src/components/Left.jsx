import {RiAddLargeLine,RiMoonFill} from 'react-icons/ri';
import allNotesIcon from '../assets/layers.png';
import folder from '../assets/folder.png';

const Left = () => {
    return (
        <div className='left'>
            <>
                <div className='left-top'>
                    <span className='logo'>
                        <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-notes-icon-png-image_3785512.jpg" alt="Note" />
                    </span>
                    <h2>NotesApp</h2>
                    <span className='changeMode'>
                        <RiMoonFill size={30} />
                    </span>

                </div>

                {/* next part  */}
                <div className='left-centre'>
                    <div className='tile'>
                        <div className='icon'>
                            <img src={allNotesIcon} alt="allNotes" />
                            <h4>All Notes</h4>
                        </div>
                        <div className='number'>
                            34
                        </div>
                    </div>

                    <div className='tile'>
                        <div className='icon'>
                            <img src={allNotesIcon} alt="allNotes" />
                            <h4>All Notes</h4>
                        </div>
                        <div className='number'>
                            34
                        </div>
                    </div>
                </div>


                {/* folders tiles    */}
                <div className='left-folders'>
                    <h4>FOLDERS</h4>

                    <div className='tile'>
                        <div className='tile-icon'>
                            <img src={folder} alt="folders" />
                            <h4> Folder name</h4>
                        </div>
                        <span className='numberOfFolders'>
                            5
                        </span>
                    </div>
                </div>

            </>
            <div className='addNoteButton'>
                <button>
                    <RiAddLargeLine style={{ marginRight: '8px', fontWeight: 'bold'}}/>

                    New Note
                </button>
            </div>
        </div>
    )
}

export default Left