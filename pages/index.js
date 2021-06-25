import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FormSelection from '../components/FormSelection';

import dummyData from '../dummydata/dummydata';

export default function Home() {

  const [selectedAction, setSelectedAction] = useState();

  const router = useRouter();

  useEffect(() => {
    if (!selectedAction) { return }
    router.replace(`/${selectedAction}`)
  }, [selectedAction])

  const formSelectionHandler = (selectedForm) => {
    if (!selectedForm) {
      alert('Please select an option')
      return
    }
    setSelectedAction(selectedForm)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <FormSelection
            name="requestedAction"
            label="Requested Action"
            displayForm={(e) => { formSelectionHandler(e) }} options={dummyData.requestedActionOptions}
          />
        </div>
      </div>
    </div>
  )
}
