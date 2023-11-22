const db = require("../db");

const paginateMiddleware = (model, options = {}) => {
  return async (req, res, next) => {
    try {
      const { offset = 1, limit = 10 } = req.query;

      const paginatedData = await db(model)
        .select("*")
        .limit(limit)
        .offset(offset);

      const totalCountQuery = db(model).count("id as total");
      const [totalRows] = await totalCountQuery;

      res.paginatedData = {
        data: paginatedData,
        currentPage: offset,
        limit,
        totalRows: totalRows.total,
        totalPages: Math.ceil(totalRows.total / limit),
      };

      next();
    } catch (error) {
      console.error("Error paginating data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
};

module.exports = { paginateMiddleware };
