import React, {useState} from 'react';

interface AtomLegend {
    // filteredCurSnap is an object of atom or selector names as keys and 
    // an object as their value.
    atomAndSelectorArr: [string, any][];
    setSearchValue: any;
  };

const AtomNetworkLegend: React.FC<AtomLegend> = ({atomAndSelectorArr, setSearchValue}) => {

    // array of atom names (what the drop down showAtomMenu is going to display)
    const [atomList] = useState(atomAndSelectorArr.filter(([isAtom, obj])=> !obj.nodeDeps.length ? isAtom : null));
    
    // array of selectors (what the drop down showSelectorMenu is going to display)
    const [selectorList] = useState(atomAndSelectorArr.filter(([isSelector, obj]) => obj.nodeDeps.length ? isSelector : null));


    //state hook for showing list of atoms
    const [showAtomMenu, setShowAtomMenu] = useState(false);
    
    //state hook for showing list of selectors
    const [showSelectorMenu, setShowSelectorMenu] = useState(false);
    const [atomButtonClicked, setAtomButtonClicked] = useState<boolean>(false);
    const [selectorButtonClicked, setSelectorButtonClicked] = useState<boolean>(false);

    // function to handle change in search bar. Sets searchValue state
     const handleChange = (e: any) => {
        setSearchValue(e.target.value);
     };

    // handles clicking on Selector and Atom buttom to bring down
    // list of atoms or selects
    function openDropdown(e: React.MouseEvent) {
        // if user clicks on atom list button
        const target = e.target as Element;
        if(target.id === 'AtomP') {
        // check if selector list was previously open, if it is, close it
        if(showSelectorMenu) setShowSelectorMenu(false);
        // open atom list
        setShowAtomMenu(!showAtomMenu);
        // empty search box
        setSearchValue('');
        setAtomButtonClicked(true);
        setSelectorButtonClicked(false);
        }
        // if user clicks on selector list button
        else if(target.id === 'SelectorP') {
        // check if atom list was previously open, if it is, close it
        if(showAtomMenu) setShowAtomMenu(false);
        // show Selector list
        setShowSelectorMenu(!showSelectorMenu);
        // empty search box
        setSearchValue('');
        setSelectorButtonClicked(true);
        setAtomButtonClicked(false);
        }
    }

    return (

        <div className="LegendContainer">
            <div className= "RecoilSearch"> 
                <input
                id="networkSearch"
                type="text"
                placeholder="search for state"
                //check the input value to render corresponding and related nodes
                onChange={handleChange}
                />
            </div>
            <div className="AtomNetworkLegendWithSearch">
              
                <div className="AtomLegend"> </div>
                    {/* //change the visibility of the div depending the value of the state */}
                    <button
                        onClick={openDropdown}
                        id="AtomP"
                        className={
                        atomButtonClicked ? "AtomP atomSelected" : "AtomP atomLegendDefault"
                        }>
                        ATOM
                    </button>
            
                <div className="SelectorLegend"></div> 
                    <button
                        onClick={openDropdown}
                        id="SelectorP"
                        className={
                        selectorButtonClicked ? "SelctorP selectorSelected" : "SelectorP selectorLegendDefault"
                        }>
                        SELECTOR
                    </button>
              
            {/* conditional rendering of dropdowns depending on the value of the state */}
            {showAtomMenu &&
                <div className="AtomDropdown">{atomList.map(([atom, atomObj], i)=> {
                return (
                    <div className= "dropDownButtonDiv">
                <button key={i} id={`atom-drop${i}`} className='atom-class atomDropDown' onClick={(event: React.MouseEvent) => {
                    if (
                        !(event.target as HTMLInputElement).classList.contains(
                          'atomSelected',
                        ) &&
                        (event.target as HTMLInputElement).classList.contains(
                          'atomNotSelected',
                        )
                      ) {
                        (event.target as HTMLInputElement).classList.replace(
                          'atomNotSelected',
                          'atomSelected',
                        );
                      } else if (
                        !(event.target as HTMLInputElement).classList.contains(
                          'atomSelected',
                        ) &&
                        !(event.target as HTMLInputElement).classList.contains(
                          'atomNotSelected',
                        )
                      ) {
                        (event.target as HTMLInputElement).classList.add(
                          'atomSelected',
                        );
                      }
  
                      document.querySelectorAll('.atom-class').forEach(item => {
                        if (
                          item.id !== `atom-drop${i}` &&
                          item.classList.contains('atomSelected')
                        ) {
                          item.classList.replace(
                            'atomSelected',
                            'atomNotSelected',
                          );
                        } else if (
                          item.id !== `atom-drop${i}` &&
                          !item.classList.contains('atomNotSelected')
                        ) {
                          item.classList.add('atomNotSelected');
                        }
                      });

                    //set the search value to the name of the paragraph element to render only corresponding and related nodes
                    setSearchValue((event.target as Element).innerHTML);
                }}>{atom}</button></div>)
            })}</div>}
            {showSelectorMenu &&
                <div className="SelectorDropdown">{selectorList.map(([selector, selectorObj], i) => {
                return (
                <div className="dropDownButtonDiv">
                <button key={i} id={`selector-drop${i}`} className='selector-class selectorDropDown' onClick={(event: React.MouseEvent) => {
                    if (
                        !(event.target as HTMLInputElement).classList.contains(
                          'selectorSelected',
                        ) &&
                        (event.target as HTMLInputElement).classList.contains(
                          'selectorNotSelected',
                        )
                      ) {
                        (event.target as HTMLInputElement).classList.replace(
                          'selectorNotSelected',
                          'selectorSelected',
                        );
                      } else if (
                        !(event.target as HTMLInputElement).classList.contains(
                          'selectorSelected',
                        ) &&
                        !(event.target as HTMLInputElement).classList.contains(
                          'selectorNotSelected',
                        )
                      ) {
                        (event.target as HTMLInputElement).classList.add(
                          'selectorSelected',
                        );
                      }
  
                      document
                        .querySelectorAll('.selector-class')
                        .forEach(item => {
                          if (
                            item.id !== `selector-drop${i}` &&
                            item.classList.contains('selectorSelected')
                          ) {
                            item.classList.replace(
                              'selectorSelected',
                              'selectorNotSelected',
                            );
                          } else if (
                            item.id !== `selector-drop${i}` &&
                            !item.classList.contains('selectorNotSelected')
                          ) {
                            item.classList.add('selectorNotSelected');
                          }
                        });
                    //set the search value to the name of the paragraph element to render only corresponding and related nodes
                    setSearchValue((event.target as Element).innerHTML);
                }}>{selector}</button></div>)
            })}</div>}
            </div>
        </div>
    )
}

export default AtomNetworkLegend; 