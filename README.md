## Repro

`yarn`  
`yarn start`

- Go to the playground `http://localhost:3000/graphql`
- Construct query:

```
query {
  schools {
    id
    skz
    schoolLevel
    created_at
    __typename
    classes {
      id
      name
      created_at
      __typename
    }
  }
}
```
