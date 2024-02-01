.. title:: Animate, Movement and Goalie

.. only:: html

Welcome to the documentation for Animate, Movement and Goalie!
==============================================================

`Animate <animate/index.html>`__ is a package which provides anisotropic mesh adaptation
functionality for the Python-based finite element library
`Firedrake <http://www.firedrakeproject.org/>`__. Given an initial mesh, the
user defines a Riemannian metric field (or simply 'metric'), which provides the
'optimal mesh concept', i.e. a 'blueprint' for what adapted meshes will look
like. Animate can then be used to transform the initial mesh into an adapted
mesh, making use of the metric to guide the transformations.

`Movement <movement/index.html>`__ focuses on alternative mesh adaptation strategies to
the metric-based approach of Animate. Where Animate allows degrees of freedom to be
added and removed from the input mesh in order to obtain an adapted mesh, Movement is
concerned only with *mesh movement* methods, which simply move degrees of freedom
around. In some cases the first approach is more suitable; in some cases the latter.
Several different strategies are implemented within Movement.

`Goalie <goalie/index.html>`__ is more of an 'outer-loop' package and is focused on a
goal-oriented mesh adaptation pipeline for solving partial differential
equations (PDEs) using adapted meshes. Goalie supports solving time-dependent PDEs
and their adjoints on sequences of meshes, performing goal-oriented error
estimation, and adapting the meshes in the sequence with a user-provided adaptor
function. A key example of such an adaptor function is one which uses Animate
and the metric-based approach. Goalie uses a 'fixed-point iteration' approach,
meaning that the PDE (and its adjoint) is solved over the whole space-time domain
whenever mesh adaptation is applied.

.. rubric:: Mathematical background

We refer to the
`Firedrake documentation <https://firedrakeproject.org/documentation.html>`__
for an introduction to the finite element method - the discretisation approach assumed
throughout. The `dolfin-adjoint` package (which Goalie uses to solve adjoint problems)
contains some
`excellent documentation <http://www.dolfin-adjoint.org/en/latest/documentation/maths/index.html>`__
on the mathematical background of adjoint problems. The metric-based mesh adaptation,
mesh movement, and goal-oriented error estimation functionalities provided by
`Animate <animate/index.html>`__, `Movement <movement/index.html>`__ and
`Goalie <goalie/index.html>`__ are described in the respective manuals.

.. rubric:: Source code

The source codes for all three packages are hosted on GitHub:
`Animate <https://github.com/pyroteus/animate/>`__,
`Movement <https://github.com/pyroteus/movement/>`__,
`Goalie <https://github.com/pyroteus/goalie/>`__.
