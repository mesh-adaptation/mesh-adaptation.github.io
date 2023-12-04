.. title:: Animate and Goalie

.. only:: html

Welcome to the documentation for Animate and Goalie!
====================================================

**Animate** is a package which provides anisotropic mesh adaptation
functionality for the Python-based finite element library
`Firedrake <http://www.firedrakeproject.org/>`__. Given an initial mesh, the
user defines a Riemannian metric field (or simply 'metric'), which provides the
'optimal mesh concept', i.e. a 'blueprint' for what adapted meshes will look
like. Animate can then be used to transform the initial mesh into an adapted
mesh, making use of the metric to guide the transformations.

**Goalie** is more of an 'outer-loop' package, which is responsible for
goal-oriented mesh adaptation pipelines for solving partial differential
equations (PDEs) using adapted meshes. It supports solving time-dependent PDEs
and their adjoints on sequences of meshes, performing goal-oriented error
estimation, and adapting the meshes in the sequence with a user-provided adaptor
function. A key example of such an adaptor function is one which uses Animate
and the metric-based approach.


.. rubric:: Mathematical background

Goal-oriented mesh adaptation presents one of the clearest
examples of the intersection between adjoint methods and mesh
adaptation. It is an advanced topic, so it is highly
recommended that users are familiar with adjoint methods,
mesh adaptation and the goal-oriented framework before
starting with Goalie.

We refer to the `Firedrake documentation
<https://firedrakeproject.org/documentation.html>`__
for an introduction to the finite element method - the
discretisation approach assumed throughout. The
`dolfin-adjoint` package (which Goalie uses to solve adjoint
problems) contains some `excellent documentation
<http://www.dolfin-adjoint.org/en/latest/documentation/maths/index.html>`__
on the mathematical background of adjoint problems. The
goal-oriented error estimation and metric-based mesh adaptation
functionalities provided by Goalie are described in the manual.

.. toctree::
    :maxdepth: 2

    Goalie manual <maths/index>


.. rubric:: API documentation

The classes and functions which comprise Animate and Goalie may be found in
their API documentation.

.. toctree::
    :maxdepth: 1

    Animate API documentation <animate>
    Goalie API documentation <goalie>

They are also listed alphabetically on the :ref:`index <genindex>` page. The
index may be searched using the inbuilt :ref:`search engine <search>`. The
source code for both packages is hosted on GitHub:
`Animate <https://github.com/pyroteus/animate/>`__,
`Goalie <https://github.com/pyroteus/goalie/>`__.


.. rubric:: Goalie demos

*Time partitions and mesh sequences*

.. toctree::
    :maxdepth: 1

    Partitioning a time interval <demos/time_partition.py>
    Creating a mesh sequence <demos/mesh_seq.py>
    Burgers equation on a sequence of meshes <demos/burgers.py>
    Adjoint Burgers equation <demos/burgers1.py>
    Adjoint Burgers equation on two meshes <demos/burgers2.py>
    Adjoint Burgers equation with a time-integrated QoI <demos/burgers_time_integrated.py>
    Adjoint Burgers equation (object-oriented approach) <demos/burgers_oo.py>
    Solid body rotation <demos/solid_body_rotation.py>
    Solid body rotation with multiple prognostic variables <demos/solid_body_rotation_split.py>
    Advection-diffusion-reaction <demos/gray_scott.py>
    Advection-diffusion-reaction with multiple prognostic variables <demos/gray_scott_split.py>

*Error estimation*

.. toctree::
    :maxdepth: 1

    Error estimation for Burgers equation <demos/burgers_ee.py>
    Point discharge with diffusion <demos/point_discharge2d.py>

*Mesh adaptation*

.. toctree::
    :maxdepth: 1

    Hessian-based mesh adaptation for a 2D steady-state problem <demos/point_discharge2d-hessian.py>
    Goal-oriented mesh adaptation for a 2D steady-state problem <demos/point_discharge2d-goal_oriented.py>
    Hessian-based mesh adaptation for a 2D time-dependent problem <demos/burgers-hessian.py>
