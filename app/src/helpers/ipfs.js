import ipfsAPI from 'ipfs-http-client'

export const gateway = process.env.REACT_APP_IPFS_GATEWAY
const apiUrl = new URL(process.env.REACT_APP_IPFS_API)
const { hostname, protocol } = apiUrl
const port = apiUrl.port || protocol === 'http:' ? 80 : 443
console.log(hostname, protocol, port)
export const ipfs = ipfsAPI(hostname, port, { protocol: protocol.slice(0, -1) })

const getHashes = values => values.map(({ hash }) => hash)

export function save(file) {
  return ipfs
    .add(file)
    .then(getHashes)
    .then(hashes => ipfs.pin.add(hashes))
    .then(getHashes)
    .then(hashes => {
      console.log(hashes.map(hash => `${gateway}/ipfs/${hash}`))
      return hashes
    })
}

export function url(ipfsUrl) {
  return `${gateway}/${ipfsUrl}`
}
