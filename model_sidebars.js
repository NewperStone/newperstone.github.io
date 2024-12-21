const MLModelSidebar  = [
    'models/mlmodel/pca',
    {
      type: 'category',
      label: 'Bayesian',
      items: [
        {
          type: 'autogenerated',
          dirName: 'models/mlmodel/bayesian'
        }
      ]
    },
    {
      type: 'category',
      label: 'Clustering',
      items: [
        {
          type: 'autogenerated',
          dirName: 'models/mlmodel/clustering'
        }
      ]
    },
    {
      type: 'category',
      label: 'Community Detection',
      items: [
        {
          type: 'autogenerated',
          dirName: 'models/mlmodel/community'
        }
      ]
    },
]


const AIModelSidebar = [
    'models/aimodel/intro',
    'models/aimodel/autoencoder',
    {
        type: 'category',
        label: 'Transformer',
        items: [
          {
            type: 'autogenerated',
            dirName: 'models/aimodel/Transformer'
          }
        ]
    },
    {
      type: 'category',
      label: 'Bert',
      items: [
        {
          type: 'autogenerated',
          dirName: 'models/aimodel/Bert'
        }
      ]
  },
    {
        type: 'category',
        label: 'CLIP',
        items: [
          {
            type: 'autogenerated',
            dirName: 'models/aimodel/CLIP'
          }
        ]
    },
    {
      type: 'category',
      label: 'Prob. Models',
      items: [
        {
          type: 'autogenerated',
          dirName: 'models/aimodel/Prob'
        }
      ]
    },
    {
      type: 'category',
      label: 'SAM',
      items: [
        {
          type: 'autogenerated',
          dirName: 'models/aimodel/SAM'
        }
      ]
    },
]


const LargeModelSidebar = [
    {
      type: 'autogenerated',
      dirName: 'models/largemodel',
    },
]
    

const ModelsSidebars = {
    MLModelSidebar: MLModelSidebar,
    AIModelSidebar: AIModelSidebar,
    LargeModelSidebar: LargeModelSidebar,
}


export default ModelsSidebars;