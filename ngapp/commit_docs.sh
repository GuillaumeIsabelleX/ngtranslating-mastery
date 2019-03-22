#!/bin/bash
(cd .. ; git add docs/* --ignore-errors;  git commit docs -m "docs updated"   && git push  )
