import React, {useState} from 'react'
import gql from 'graphql-tag'
//apollo hooks
import { useQuery, useMutation } from '@apollo/react-hooks'
import PetsList from '../components/PetsList'
import NewPetModal from '../components/NewPetModal'
import Loader from '../components/Loader'

const PET_LIST = gql`
query MyPets{
  petsList{
    id
    name
  }
}
`;

export default function Pets () {
  const [modal, setModal] = useState(false)
  //https://www.apollographql.com/docs/tutorial/queries
  const {data, loading, error} = useQuery(PET_LIST)
  console.log(data)

  const onSubmit = input => {
    setModal(false)
  }

  if (loading){
    return <Loader/>
  }
  
  if (error) {
    return <p>error</p>
  }
  
  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
  }

  return (
    <div className="page pets-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <PetsList pets={data.petsList}/>
      </section>
    </div>
  )
}
