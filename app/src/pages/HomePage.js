import React, { useEffect } from 'react'
import ProjectList from '../components/ProjectList'
import { projectActions } from '../actions'
import Layout from '../components/Layout'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import SmartProjectsContract from '../contracts/SmartProjects.json'
import getWeb3 from '../helpers/getWeb3'

function Home() {
  const user = useSelector(state => state.authentication.user)
  const projects = useSelector(state => state.projects.items) || []
  const dispatch = useDispatch()
  const { t } = useTranslation('App')

  const isMyProject = project =>
    user &&
    (project.organizer === user.id || project.participants.includes(user.id))
  const myProjects = projects.filter(isMyProject)
  const notMyProjects = projects.filter(p => !isMyProject(p))

  const title = t(
    'Join the SmartIb Community of Creative Workers on Blockchain'
  )
  const subtitle = t('Support projects, find opportunities')

  useEffect(() => {
    dispatch(projectActions.getAll())
  }, [])

  const header = !user ? 'header-1' : 'header-2'

  return (
    <Layout
      title={title}
      subtitle={subtitle}
      background={`/images/${header}.jpg`}
      overlay={false}
    >
      <Container>
        {user && (
          <div>
            <Typography variant="h3">{t('Your Projects')}</Typography>
            <ProjectList projects={myProjects} showNewProjectTile />
          </div>
        )}
        {user && <Typography variant="h3">{t('New Projects')}</Typography>}
        <ProjectList projects={notMyProjects} />
        <Store />
      </Container>
    </Layout>
  )
}

class Store extends React.Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null }

  componentDidMount = async () => {
    console.log('trying')
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3()

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts()

      // Get the contract instance.
      const networkId = await web3.eth.net.getId()
      const deployedNetwork = SmartProjectsContract.networks[networkId]
      const instance = new web3.eth.Contract(
        SmartProjectsContract.abi,
        deployedNetwork && deployedNetwork.address
      )

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample)
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      )
      console.error(error)
    }
  }

  runExample = async () => {
    const { accounts, contract } = this.state

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] })

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call()

    // Update state with the result.
    this.setState({ storageValue: response })
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    )
  }
}

export default Home
