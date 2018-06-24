export const vertex = {
  functon: "Function",
  input: "Input",
  output: "Output",
  failureMode: "Failure Mode",
  failureModeEffect: "Failure Mode Effect",
  failureCause: "Failure Cause"
};

export const relations = {
  functionInput: "Function Input",
  functionOutput: "Function Output",
  composeOff: "Composeoff",
  functionFlow: "Function Flow",
  associatedFailureMode: "Associated Failure Mode",
  associatedFailureModeEffect: "Associated FailureMode Effect",
  associatedFailureModeCause: "Associated FailureMode Cause",
  associatedHigherLevelCause: "Associated Higher Level Cause"
};

export const treeDummyData = {
  name: "flare",
  children: [
    {
      name: "data",
      children: [
        {
          name: "converters",
          children: [
            { name: "Converters", value: 721 },
            { name: "DelimitedTextConverter", value: 4294 }
          ]
        },
        {
          name: "DataUtil",
          value: 3322
        }
      ]
    },
    {
      name: "display",
      children: [
        { name: "DirtySprite", value: 8833 },
        { name: "LineSprite", value: 1732 },
        { name: "RectSprite", value: 3623 }
      ]
    },
    {
      name: "flex",
      children: [{ name: "FlareVis", value: 4116 }]
    },
    {
      name: "query",
      children: [
        { name: "AggregateExpression", value: 1616 },
        { name: "And", value: 1027 },
        { name: "Arithmetic", value: 3891 },
        { name: "Average", value: 891 },
        { name: "BinaryExpression", value: 2893 },
        { name: "Comparison", value: 5103 },
        { name: "CompositeExpression", value: 3677 },
        { name: "Count", value: 781 },
        { name: "DateUtil", value: 4141 },
        { name: "Distinct", value: 933 },
        { name: "Expression", value: 5130 },
        { name: "ExpressionIterator", value: 3617 },
        { name: "Fn", value: 3240 },
        { name: "If", value: 2732 },
        { name: "IsA", value: 2039 },
        { name: "Literal", value: 1214 },
        { name: "Match", value: 3748 },
        { name: "Maximum", value: 843 },
        {
          name: "methods",
          children: [
            { name: "add", value: 593 },
            { name: "and", value: 330 },
            { name: "average", value: 287 },
            { name: "count", value: 277 },
            { name: "distinct", value: 292 },
            { name: "div", value: 595 },
            { name: "eq", value: 594 },
            { name: "fn", value: 460 },
            { name: "gt", value: 603 },
            { name: "gte", value: 625 },
            { name: "iff", value: 748 },
            { name: "isa", value: 461 },
            { name: "lt", value: 597 },
            { name: "lte", value: 619 },
            { name: "max", value: 283 },
            { name: "min", value: 283 },
            { name: "mod", value: 591 },
            { name: "mul", value: 603 },
            { name: "neq", value: 599 },
            { name: "not", value: 386 },
            { name: "or", value: 323 },
            { name: "orderby", value: 307 },
            { name: "range", value: 772 },
            { name: "select", value: 296 },
            { name: "stddev", value: 363 },
            { name: "sub", value: 600 },
            { name: "sum", value: 280 },
            { name: "update", value: 307 },
            { name: "variance", value: 335 },
            { name: "where", value: 299 },
            { name: "xor", value: 354 },
            { name: "_", value: 264 }
          ]
        },
        { name: "Minimum", value: 843 },
        { name: "Not", value: 1554 },
        { name: "Or", value: 970 },
        { name: "Query", value: 13896 },
        { name: "Range", value: 1594 },
        { name: "StringUtil", value: 4130 },
        { name: "Sum", value: 791 },
        { name: "Variable", value: 1124 },
        { name: "Variance", value: 1876 },
        { name: "Xor", value: 1101 }
      ]
    },
    {
      name: "scale",
      children: [
        { name: "IScaleMap", value: 2105 },
        { name: "LinearScale", value: 1316 },
        { name: "LogScale", value: 3151 },
        { name: "OrdinalScale", value: 3770 },
        { name: "QuantileScale", value: 2435 },
        { name: "QuantitativeScale", value: 4839 },
        { name: "RootScale", value: 1756 },
        { name: "Scale", value: 4268 },
        { name: "ScaleType", value: 1821 },
        { name: "TimeScale", value: 5833 }
      ]
    }
  ]
};

export const treeData = {
  name: "node#1",
  children: [
    {
      name: "node#2",
      children: [
        {
          name: "node#3",
          children: [
            {
              name: "node#6",
              children: [
                {
                  name: "node#9"
                }
              ]
            }
          ]
        },
        {
          name: "node#4",
          children: [
            {
              name: "node#7",
              children: [
                {
                  name: "node#10"
                }
              ]
            }
          ]
        },
        {
          name: "node#5",
          children: [
            {
              name: "node#8",
              children: []
            }
          ]
        }
      ]
    }
  ]
};

export const graphFlow = {
  nodes: [
    {
      name: "node#1",
      symbolSize: 50,
      draggable: "false",
      category: vertex.input,
      value: `${vertex.input}: node#1`
    },
    {
      name: "node#2",
      symbolSize: 50,
      draggable: "false",
      category: vertex.functon,
      value: `${vertex.functon}: node#2`
    },
    {
      name: "node#3",
      symbolSize: 50,
      draggable: "false",
      category: vertex.functon,
      value: `${vertex.functon}: node#3`
    },
    {
      name: "node#4",
      symbolSize: 50,
      draggable: "false",
      category: vertex.functon,
      value: `${vertex.functon}: node#4`
    },
    {
      name: "node#5",
      symbolSize: 50,
      draggable: "false",
      category: vertex.output,
      value: `${vertex.output}: node#5`
    },
    {
      name: "node#6",
      symbolSize: 50,
      draggable: "false",
      category: vertex.output,
      value: `${vertex.output}: node#6`
    },
    {
      name: "node#7",
      symbolSize: 50,
      draggable: "false",
      category: vertex.output,
      value: `${vertex.output}: node#7`
    },
    {
      name: "node#8",
      symbolSize: 50,
      draggable: "false",
      category: vertex.failureMode,
      value: `${vertex.failureMode}: node#8`
    },
    {
      name: "node#9",
      symbolSize: 50,
      draggable: "false",
      category: vertex.failureMode,
      value: `${vertex.failureMode}: node#9`
    },
    {
      name: "node#10",
      symbolSize: 50,
      draggable: "false",
      category: vertex.failureMode,
      value: `${vertex.failureMode}: node#10`
    },
    {
      name: "node#11",
      symbolSize: 50,
      draggable: "false",
      category: vertex.failureCause,
      value: `${vertex.failureCause}: node#11`
    },
    {
      name: "node#12",
      symbolSize: 50,
      draggable: "false",
      category: vertex.failureCause,
      value: `${vertex.failureCause}: node#12`
    },
    {
      name: "node#13",
      symbolSize: 50,
      draggable: "false",
      category: vertex.failureCause,
      value: `${vertex.failureCause}: node#13`
    }
  ],
  links: [
    {
      source: "node#1",
      target: "node#2",
      value: relations.functionInput
    },
    {
      source: "node#2",
      target: "node#3",
      value: relations.composeOff
    },
    {
      source: "node#2",
      target: "node#4",
      value: relations.composeOff
    },
    {
      source: "node#2",
      target: "node#5",
      value: relations.functionOutput
    },
    {
      source: "node#3",
      target: "node#6",
      value: relations.functionOutput
    },
    {
      source: "node#4",
      target: "node#7",
      value: relations.functionOutput
    },
    {
      source: "node#5",
      target: "node#8",
      value: relations.associatedFailureMode
    },
    {
      source: "node#6",
      target: "node#9",
      value: relations.associatedFailureMode
    },
    {
      source: "node#7",
      target: "node#10",
      value: relations.associatedFailureMode
    },
    {
      source: "node#8",
      target: "node#11",
      value: relations.associatedFailureModeCause
    },
    {
      source: "node#8",
      target: "node#12",
      value: relations.associatedFailureModeCause
    },
    {
      source: "node#8",
      target: "node#13",
      value: relations.associatedFailureModeCause
    },
    {
      source: "node#9",
      target: "node#11",
      value: relations.associatedHigherLevelCause
    },
    {
      source: "node#10",
      target: "node#11",
      value: relations.associatedHigherLevelCause
    }
  ]
};
