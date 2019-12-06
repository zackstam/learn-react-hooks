import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {

    const toggleBtnRef  = useRef();
    // useEffect(() => {
    //   console.log('cockpit useEffect 1');
    // }, [props.persons]);
    // useEffect dipanggil ketika nilai props.persons berubah

    useEffect(() => {
      console.log('cockpit useEffect 2');
      toggleBtnRef.current.click();
    }, []);

    useEffect(() => {

      setTimeout(() => {
          alert('hello world');
      }, 1000);
      console.log('cockpit useEffect 3');

      return () => {
        console.log('Cockpit cleanup')
      }
    }, []);
    // useEffect dipanggil sekali saja saat render, karena array kosong

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    console.log('Cockpit rendering ');
    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);