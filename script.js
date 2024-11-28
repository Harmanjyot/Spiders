const spec = {
  "width": 150,
  "height": 400,
  "mark": "bar",
  "transform": [
    {
      "aggregate": [
        { "op": "count", "as": "species_count" },
        { "op": "distinct", "field": "genus", "as": "genus_count" }
      ],
      "groupby": ["family"]
    },
    {
      "fold": ["species_count", "genus_count"],
      "as": ["Category", "Count"]
    },
    {
      "filter": "datum.family == Spider_Family_Select || Spider_Family_Select == 'ALL'"
    }
  ],
  "encoding": {
    "y": { "field": "family", "type": "nominal", "title": "Family" },
    "x": { "field": "Count", "type": "quantitative", "title": "Count" },
    "color": {
      "field": "Category",
      "type": "nominal",
      "scale": { "scheme": "bluegreen" }
    }
  }
};

vegaEmbed('#vis', spec);
