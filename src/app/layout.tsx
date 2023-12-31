'use client'

import { useState } from 'react'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'

import { Iconify } from '@/components/Iconify'
import { Grid, Paper, Typography } from '@mui/material'

import { LeassonOne } from '@/app/leasson-one'

import { GlobalStyle } from '../styles/global'

interface RenderTree {
  id: string
  name: string
  element?: React.ReactNode
  children?: readonly RenderTree[]
}

const data: RenderTree = {
  id: 'root',
  name: 'Hook-Form',
  children: [
    {
      id: '1',
      name: 'Leasson One',
      element: <LeassonOne />
    },
    {
      id: '3',
      name: 'Leasson Two',
      children: [
        {
          id: '4',
          name: 'Leasson tree',
          element: <h1>Test 3</h1>
        }
      ]
    }
  ]
}

const RootLayout = () => {
  const [selectedNode, setSelectedNode] = useState<RenderTree | null>(null)

  const handleNodeClick = (node: RenderTree) => {
    if (node.element) {
      setSelectedNode(node)
    }
  }

  const renderTree = (nodes: RenderTree) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={nodes.name}
      onClick={() => handleNodeClick(nodes)}
      sx={{
        '& .MuiTreeItem-content.Mui-selected': {
          borderRadius: 1
        }
      }}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  )

  const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js'
  }

  const paperRootStyle = {
    padding: '1rem',
    backgroundColor: '#262f3c',
    borderRadius: 2,
    color: '#fff'
  }

  return (
    <html lang="en">
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />

      <GlobalStyle />

      <body>
        <main>
          <Grid container spacing={3} p={2}>
            <Grid item xs={12}>
              <Paper sx={paperRootStyle}>
                <Typography variant="h5">
                  Examples of React Hooks Form
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={paperRootStyle}>
                <TreeView
                  aria-label="rich object"
                  defaultCollapseIcon={<Iconify icon="mdi:chevron-down" />}
                  defaultExpanded={['root']}
                  defaultExpandIcon={<Iconify icon="mdi:chevron-right" />}
                >
                  {renderTree(data)}
                </TreeView>
              </Paper>
            </Grid>

            {selectedNode && (
              <Grid item xs={12}>
                <Paper sx={paperRootStyle}>{selectedNode.element}</Paper>
              </Grid>
            )}
          </Grid>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
